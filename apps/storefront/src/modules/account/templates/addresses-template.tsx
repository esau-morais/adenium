"use client"

import { useAccount } from "@lib/context/account-context"
import AddressBook from "../components/address-book"

const AddressesTemplate = () => {
  const { customer, retrievingCustomer } = useAccount()

  if (retrievingCustomer || !customer) {
    return null
  }

  return (
    <div className="w-full">
      <div className="mb-8 flex flex-col gap-y-4">
        <h1 className="text-2xl-semi">Endereços de entrega</h1>
        <p className="text-base-regular">
          Visualize e altere seus endereços de entrega. Você pode adicionar
          quantos quiser e, ao salvar, estarão disponíveis durante a finalização
          de uma compra.
        </p>
      </div>
      <AddressBook customer={customer} />
    </div>
  )
}

export default AddressesTemplate
