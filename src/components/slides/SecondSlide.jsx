import React from 'react'

import styles from './slides.module.scss'

const Secondpage = () => {
  return (
    <div className={`${styles.secondslide_wrapper} container_body`}>
      <div className={styles.secondslide_background}>
        <picture className={styles.secondslide_background_1}>
          <source
            srcSet={`${process.env.PUBLIC_URL}/assets/images/bg_secondarypage/sperm1.webp`}
            type='image/webp'
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/bg_secondarypage/sperm1.png`}
            alt='описание'
          />
        </picture>
        <picture className={styles.secondslide_background_2}>
          <source
            srcSet={`${process.env.PUBLIC_URL}/assets/images/bg_secondarypage/sperm2.webp`}
            type='image/webp'
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/bg_secondarypage/sperm2.png`}
            alt='описание'
          />
        </picture>
        <picture className={styles.secondslide_background_3}>
          <source
            srcSet={`${process.env.PUBLIC_URL}/assets/images/bg_secondarypage/sperm3.webp`}
            type='image/webp'
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/bg_secondarypage/sperm3.png`}
            alt='описание'
          />
        </picture>
        <picture className={styles.secondslide_background_4}>
          <source
            srcSet={`${process.env.PUBLIC_URL}/assets/images/bg_secondarypage/sperm4.webp`}
            type='image/webp'
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/bg_secondarypage/sperm4.png`}
            alt='описание'
          />
        </picture>
        <picture className={styles.secondslide_background_5}>
          <source
            srcSet={`${process.env.PUBLIC_URL}/assets/images/bg_secondarypage/sperm5.webp`}
            type='image/webp'
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/bg_secondarypage/sperm5.png`}
            alt='описание'
          />
        </picture>
      </div>

      <span className={styles.secondslide_hello}>текст сообщения</span>
      <div className={styles.secondslide_body}>
        <span className={styles.secondslide_text}>
          <b>Lorem ipsum dolor sit amet consectetur</b>, adipisicing elit. Amet
          temporibus iure eius, illum at magnam veniam dolorum voluptatum
          tempora quasi quidem dolores tempore laborum dolor quas assumenda illo
          corrupti dignissimos, nulla optio dolore? Ipsa expedita modi provident
          alias molestiae sunt obcaecati quas quisquam nulla? Esse qui
          reiciendis animi ducimus nulla excepturi nisi vel, necessitatibus
          repudiandae vero labore saepe quidem soluta perspiciatis! Perspiciatis
          fugit velit veritatis accusamus accusantium consequuntur repellendus
          ut distinctio vel sapiente. Nostrum reprehenderit obcaecati quam
          eveniet, quo impedit quis illo modi recusandae id explicabo, atque
          aperiam? Labore quasi laudantium magni laboriosam ullam voluptate,
          unde commodi amet, iusto doloremque vero. Saepe cumque perferendis eum
          iusto sunt delectus facere sit obcaecati qui aperiam vel corporis nam
          inventore facilis doloribus voluptatem dolore totam officiis aliquam,
          aliquid illo expedita. Iure obcaecati earum provident quaerat sequi
          illum qui voluptatum similique, aspernatur, voluptas inventore, dolor
          at enim ut tempore libero nesciunt eveniet minima dignissimos.
        </span>
      </div>
    </div>
  )
}

export default Secondpage
