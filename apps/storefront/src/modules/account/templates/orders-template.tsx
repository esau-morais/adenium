import OrderOverview from "../components/order-overview"

const OrdersTemplate = () => {
  return (
    <div className="w-full">
      <div className="mb-8 flex flex-col gap-y-4">
        <h1 className="text-2xl-semi">Pedidos</h1>
        <p className="text-base-regular">
          Veja seus pedidos anteriores e seus status.
        </p>
      </div>
      <div>
        <OrderOverview />
      </div>
    </div>
  )
}

export default OrdersTemplate
