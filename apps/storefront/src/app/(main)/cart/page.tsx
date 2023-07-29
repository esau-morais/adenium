import CartTemplate from "@modules/cart/templates"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Carrinho de Compras",
  description: "Veja seu carrinho de compras",
}

export default function Cart() {
  return <CartTemplate />
}
