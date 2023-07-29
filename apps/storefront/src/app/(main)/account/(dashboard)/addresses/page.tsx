import AddressesTemplate from "@modules/account/templates/addresses-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Livro de Endereços",
  description: "Veja seus endereços de cobrança e envio",
}

export default function Addresses() {
  return <AddressesTemplate />
}
