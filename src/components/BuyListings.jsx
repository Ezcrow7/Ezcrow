import { useEffect, useState } from 'react'
import { getTokenSymbol, hashWalletID } from '../appCore/globalFunctions'
import { isSpendApproved } from '../appCore/web3ReadFunctions'






const BuyListings = ({ offeredToken }) => {
  const [expandItemToBuy, setExpandItemToBuy] = useState(false)
  const [tokenName, setTokenName] = useState('')
  const [approvedSpendAmount, setApprovedSpendAmount] = useState(0)
  const [amoutOfTokenToBuy, setAmoutOfTokenToBuy] = useState('')
  



  useEffect(() => {
    getTokenSymbol(offeredToken.tokenInstance).then(symbol => setTokenName(symbol))
    isSpendApproved(offeredToken.pairedTokenAddress, offeredToken.tradeAddressOfPairedToken)
  }, [offeredToken.tokenInstance])
  




  return (
    <section className="grid grid-cols-10 items-center border-b-2 py-8 px-4">
      <aside className="col-span-3 font-semibold text-xl">
        {tokenName}/{offeredToken.nameOfPair}
      </aside>
      
      <aside className="col-span-2">
        { offeredToken?.rate[0] / (Math.pow(10, 6) * 100) } <span className="text-xs">{offeredToken.nameOfPair}</span>
      </aside>

      <aside className="col-span-2">
        {offeredToken.tokensLeft / Math.pow(10, 6)}
      </aside>

      <aside className="col-span-1">
        {hashWalletID(offeredToken.offeringUser)}
      </aside>

      <aside className="col-span-2 text-right">
        <button className="btn-primary w-36 py-1.5"
          onClick={() => setExpandItemToBuy(!expandItemToBuy)}
        >Buy ETH</button>
      </aside>

      <aside className={`col-span-10 grid grid-cols-6 sm:grid-cols-12 transition-all duration-300 overflow-hidden ${expandItemToBuy ? 'h-44 border-t-2 py-8' : 'h-0'}`}>
        <div className="col-span-6">
          {/* <input type="text" className="border px-2 py-1 outline-none" placeholder="Amount to buy" />
          <button className="btn-primary w-36 py-1.5">Buy ETH</button> */}
        </div>

        <div className="col-span-6 space-y-6">
          <div className="">
            <input
              type="text"
              className="border px-3 py-2 sm:w-2/3 outline-none"
              placeholder="Amount to buy"
              value={amoutOfTokenToBuy}
              onChange={(event) => {
                if (event.target.value > -1 || event.target.value === '') {
                  setAmoutOfTokenToBuy(event.target.value)
                }
              }}
            />
          </div>

          <div className="flex items-center gap-x-4 w-2/3">
            <button className="bg-zinc-200 w-1/3 py-2"
              onClick={() => setExpandItemToBuy(!expandItemToBuy)}
            >Cancel</button>

            <button className="btn-primary w-2/3 py-2">Buy ETH</button>
          </div>
        </div>
      </aside>
    </section>
  )
}

export default BuyListings