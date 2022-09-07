import FeatList from 'src/component/featList'
import Footer from 'src/component/footer'
import Hero from 'src/component/hero'
import Products from 'src/component/products'
import Services from 'src/component/services'
import Testimoni from 'src/component/testimoni'
import Works from 'src/component/works'
import { page } from 'web-init'

export default page({
  url: '/',
  layout: 'navbar',
  component: ({}) => {
    return <>
      <Hero />
      <FeatList />
      <Services />
      <Works />
      <Products />
      <Testimoni />
      <Footer />
    </>
  }
})