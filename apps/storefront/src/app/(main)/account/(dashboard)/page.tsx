import OverviewTemplate from "@modules/account/templates/overview-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Minha conta",
  description: "Visão geral de sua conta",
}

export default function Account() {
  return <OverviewTemplate />
}
