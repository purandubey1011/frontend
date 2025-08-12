import Hero from './Hero'
import BestInfluencer from './BestInfluencer'
import Howwehelp from './Howwehelp'
import Howitworks from './Howitworks'
import Testimonials from './Testimonials'
import Faq from './Faq'
import Calltoaction from './Calltoaction'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
      <Hero />
      <BestInfluencer />
      <Howwehelp />
      <Howitworks />
      <Testimonials />
      <Faq />
      <Calltoaction/>
      <Footer/>
    </div>
  )
}

export default Home
