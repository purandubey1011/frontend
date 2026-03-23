import Hero from './Hero'
import BestInfluencer from './BestInfluencer'
import ProblemSolution from './ProblemSolution'
import Howwehelp from './Howwehelp'
import Howitworks from './Howitworks'
import WhyUnyferExists from './WhyUnyferExists'
import Testimonials from './Testimonials'
import Faq from './Faq'
import Calltoaction from './Calltoaction'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
      <Hero />
      <BestInfluencer />
      <ProblemSolution />
      <Howwehelp />
      <Howitworks />
      <WhyUnyferExists />
      <Testimonials />
      <Faq />
      <Calltoaction/>
      <Footer/>
    </div>
  )
}

export default Home
