import React from 'react'

const BuyListings = () => {
  return (
    <section className="grid grid-cols-10 items-center border-b-2 py-8 px-4">
      <aside className="col-span-3 font-semibold text-xl">
        USDC/ETH
      </aside>
      
      <aside className="col-span-2">
        0.02
      </aside>

      <aside className="col-span-2">
        60,000
      </aside>

      <aside className="col-span-1">
        0xf3....D43e
      </aside>

      <aside className="col-span-2 text-right">
        <button className="btn-primary w-36 py-1.5">Buy ETH</button>
      </aside>
    </section>
  )
}

export default BuyListings