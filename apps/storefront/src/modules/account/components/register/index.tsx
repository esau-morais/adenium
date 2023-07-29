import { medusaClient } from "@lib/config"
import { LOGIN_VIEW, useAccount } from "@lib/context/account-context"
import Button from "@modules/common/components/button"
import Input from "@modules/common/components/input"
import Spinner from "@modules/common/icons/spinner"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { FieldValues, useForm } from "react-hook-form"

interface RegisterCredentials extends FieldValues {
  first_name: string
  last_name: string
  email: string
  password: string
  phone?: string
}

const Register = () => {
  const { loginView, refetchCustomer } = useAccount()
  const [_, setCurrentView] = loginView
  const [authError, setAuthError] = useState<string | undefined>(undefined)
  const router = useRouter()

  const handleError = (e: Error) => {
    setAuthError("Ocorreu um erro inesperado. Por favor tente novamente.")
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterCredentials>()

  const onSubmit = handleSubmit(async (credentials) => {
    await medusaClient.customers
      .create(credentials)
      .then(() => {
        refetchCustomer()
        router.push("/account")
      })
      .catch(handleError)
  })

  return (
    <div className="max-w-sm flex flex-col items-center mt-12">
      {isSubmitting && (
        <div className="z-10 fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center">
          <Spinner size={24} />
        </div>
      )}
      <h1 className="text-large-semi uppercase mb-6">Criar conta</h1>
      <p className="text-center text-base-regular text-gray-700 mb-4">
        Crie uma conta na Rosama e tenha acesso a uma melhor experiência em sua
        compra.
      </p>
      <form className="w-full flex flex-col" onSubmit={onSubmit}>
        <div className="flex flex-col w-full gap-y-2">
          <Input
            label="Nome"
            {...register("first_name", { required: "Nome é obrigatório" })}
            autoComplete="given-name"
            errors={errors}
          />
          <Input
            label="Sobrenome"
            {...register("last_name", { required: "Sobrenome é obrigatório" })}
            autoComplete="family-name"
            errors={errors}
          />
          <Input
            label="Email"
            {...register("email", { required: "Email é obrigatório" })}
            autoComplete="email"
            errors={errors}
          />
          <Input
            label="Número de telefone"
            {...register("phone")}
            autoComplete="tel"
            errors={errors}
          />
          <Input
            label="Senha"
            {...register("password", {
              required: "Senha é obrigatório",
            })}
            type="password"
            autoComplete="new-password"
            errors={errors}
          />
        </div>
        {authError && (
          <div>
            <span className="text-rose-500 w-full text-small-regular">
              Ocorreu um erro ao cadastrar sua conta. Por favor, tente
              novamente.
            </span>
          </div>
        )}
        {/* <span className="text-center text-gray-700 text-small-regular mt-6">
          By creating an account, you agree to Acme&apos;s{" "}
          <Link href="/content/privacy-policy" className="underline">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/content/terms-of-use" className="underline">
            Terms of Use
          </Link>
          .
        </span> */}
        <Button className="mt-6">Criar</Button>
      </form>
      <span className="text-center text-gray-700 text-small-regular mt-6">
        Já possui uma conta?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
          className="underline"
        >
          Entrar
        </button>
        .
      </span>
    </div>
  )
}

export default Register
