import Image from 'next/image'
import List from './components/List'
import Hero from './components/Hero'
import Categories from './components/Categories'
import Banner from './components/Banner'
import Products from './components/Products'
import Footer from './components/Footer'

export default function Home() {
  return (
  <main>
    <Hero/>
    <Categories/>
    <Products/>
         <List/>
         <Banner/>
         <Footer/>
    </main>
  )
}
