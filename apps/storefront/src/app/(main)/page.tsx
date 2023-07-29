import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Rosama",
  description:
    "Encontre os produtos que mais combinam com seu gosto. Envio nacional. Pagamento seguro.",
}

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  )
}

export default Home
