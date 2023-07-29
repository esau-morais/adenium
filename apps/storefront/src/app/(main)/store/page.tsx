import { Metadata } from "next"
import StoreTemplate from "@modules/store/templates"

export const metadata: Metadata = {
  title: "Loja",
  description: "Encontre os produtos que mais combinam com seu gosto.",
}

export default function StorePage() {
  return <StoreTemplate />
}
