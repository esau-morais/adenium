import OrdersTemplate from "@modules/account/templates/orders-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pedidos",
  description: "Visão geral dos seus pedidos anteriores",
}

export default function Orders() {
  return <OrdersTemplate />
}
