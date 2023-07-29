import LoginTemplate from "@modules/account/templates/login-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Fazer login",
  description: "Acesse sua conta Rosama",
}

export default function Login() {
  return <LoginTemplate />
}
