import { useState } from 'react'

export const useObserverSection = () => {
  const sections = document.querySelectorAll('.container_body')
  const [seenSlide, setSeenSlide] = useState('homeSlide')
  let startObserve = () => null
  let endObserver = () => null

  if (sections) {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) {
            setSeenSlide(() => entry.target.id)
          }
      },
      {
        threshold: 1.0,
      }
    )
    startObserve = () => {
      for (let i = 0; i < sections.length; i++) observer.observe(sections[i])
    }

    endObserver = () => {
      for (let i = 0; i < sections.length; i++) observer.unobserve(sections[i])
    }
  }
  return { startObserve, endObserver, seenSlide }
}
