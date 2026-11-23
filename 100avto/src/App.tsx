import { BookingProvider } from './booking'
import { useReveal } from './hooks/useReveal'
import Header from './components/Header'
import Hero from './components/Hero'
import Advantages from './components/Advantages'
import Services from './components/Services'
import Brands from './components/Brands'
import About from './components/About'
import Reviews from './components/Reviews'
import BookingForm from './components/BookingForm'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import MobileBar from './components/MobileBar'

function Page() {
  useReveal()
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Advantages />
        <Services />
        <Brands />
        <About />
        <Reviews />
        <BookingForm />
        <Contacts />
      </main>
      <Footer />
      <MobileBar />
    </>
  )
}

export default function App() {
  return (
    <BookingProvider>
      <Page />
    </BookingProvider>
  )
}
