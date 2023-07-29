import ProfileTemplate from "@modules/account/templates/profile-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Perfil",
  description: "Veja e edite seu perfil Rosama",
}

export default function Profile() {
  return <ProfileTemplate />
}
