import { About, Footer, Header, Hero, Menu, Reservation } from "@/components";



export default function Home() {
  return (
    <main className="relative ">
      <Header />
      <Hero />
      <Menu />
      <Reservation/>
      <About />
      <Footer/>
    </main>
  )
}
