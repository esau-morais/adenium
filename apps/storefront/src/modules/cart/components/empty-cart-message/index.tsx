import UnderlineLink from "@modules/common/components/underline-link"

const EmptyCartMessage = () => {
  return (
    <div className="bg-amber-100 px-8 py-24 flex flex-col justify-center items-center text-center">
      <h1 className="text-2xl-semi">Seu carrinho de compras está vazio</h1>
      <p className="text-base-regular mt-4 mb-6 max-w-[32rem]">
        Você ainda não adicionou um produto ao seu carrinho de compras. Vamos
        mudar isso e encontre os produtos que mais combinam com seu gosto.
      </p>
      <div>
        <UnderlineLink href="/store">Explorar</UnderlineLink>
      </div>
    </div>
  )
}

export default EmptyCartMessage
