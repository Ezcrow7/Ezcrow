import React from 'react'

const SellListings = () => {
  return (
    <section className="grid grid-cols-10 items-center border-b-2 py-8 px-4">
      <aside className="col-span-3 font-semibold text-xl">
        BTC/USDC
      </aside>
      
      <aside className="col-span-2">
        21,256
      </aside>

      <aside className="col-span-2">
        25,000
      </aside>

      <aside className="col-span-1">
        0xf3....D43e
      </aside>

      <aside className="col-span-2 text-right">
        <button className="btn-danger w-36 py-1.5">Sell ETH</button>
      </aside>
    </section>
  )
}

export default SellListings