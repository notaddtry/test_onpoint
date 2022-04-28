import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import Slider from './components/Slider/Slider'

function App() {
  return (
    <div className='container'>
      <Header />
      <main>
        <Slider />
      </main>
      <Footer />
    </div>
  )
}

export default App
