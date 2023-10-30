import { useEffect, useState } from 'react'
import { getTokenSymbol, hashWalletID } from '../appCore/globalFunctions'
import { isSpendApproved } from '../appCore/web3ReadFunctions'
import { approveStandardTokenToSpendOnTrade, buyOfferedTradeToken } from '../appCore/web3WriteFunctions'






const BuyListings = ({ offeredToken, loadListedTokens }) => {
  const { nameOfPair, tokensLeft, offeringUser, rate, tradeAddressOfPairedToken, pairedTokenAddress, offerId } = offeredToken
  const [expandItemToBuy, setExpandItemToBuy] = useState(false)
  const [tokenName, setTokenName] = useState('')
  const [approvedSpendAmount, setApprovedSpendAmount] = useState(0)
  const [amoutOfTokenToBuy, setAmoutOfTokenToBuy] = useState('')
  const amountToApprove = ((tokensLeft * (rate.numerator / rate.denominator)) / Math.pow(10, 6));
  



  useEffect(() => {
    getTokenSymbol(offeredToken.tokenInstance).then(symbol => setTokenName(symbol))
    isSpendApproved(offeredToken.pairedTokenAddress, offeredToken.tradeAddressOfPairedToken).then(approvedAmount => setApprovedSpendAmount(approvedAmount))
  }, [offeredToken])





  const refreshContent = () => {
    setExpandItemToBuy(false)
    setAmoutOfTokenToBuy('')
    loadListedTokens()
  }






  return (
    <section className="grid grid-cols-10 items-center border-b-2 py-8 px-4">
      <aside className="col-span-3 font-semibold text-xl">
        {tokenName}/{nameOfPair}
      </aside>
      
      <aside className="col-span-2">
        { rate.numerator / rate.denominator } <span className="text-xs">{nameOfPair}</span>
      </aside>

      <aside className="col-span-2">
        {tokensLeft / Math.pow(10, 6)}
      </aside>

      <aside className="col-span-1">
        {hashWalletID(offeringUser)}
      </aside>

      <aside className="col-span-2 text-right">
        {amountToApprove > (approvedSpendAmount / Math.pow(10, 6)) ?
          <button className="bg-ezcrow-800 text-white w-36 py-1.5"
            onClick={() => {
              approveStandardTokenToSpendOnTrade(amountToApprove, pairedTokenAddress, tradeAddressOfPairedToken).then(isApproved => {
                if (isApproved) {
                  setExpandItemToBuy(!expandItemToBuy)
                  setApprovedSpendAmount(amountToApprove)
                  return
                }
              })
            }}
          >Approve {nameOfPair}</button>
        :
          <button className="btn-primary w-36 py-1.5"
            onClick={() => setExpandItemToBuy(!expandItemToBuy)}
          >Buy {tokenName}</button>
        }
      </aside>

      <aside className={`col-span-10 grid grid-cols-6 sm:grid-cols-12 transition-all duration-300 overflow-hidden ${expandItemToBuy ? 'h-44 border-t-2 py-8' : 'h-0'}`}>
        <div className="col-span-6">
          {/* <input type="text" className="border px-2 py-1 outline-none" placeholder="Amount to buy" />
          <button className="btn-primary w-36 py-1.5">Buy {tokenName}</button> */}
        </div>

        <div className="col-span-6 space-y-6">
          <div className="">
            <input
              type="text"
              className="border px-3 py-2 sm:w-2/3 outline-none"
              placeholder={`Amount of ${tokenName} to buy`}
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

            <button className="btn-primary w-2/3 py-2"
              onClick={() => {
                buyOfferedTradeToken('EzcrowDemo', offerId, amoutOfTokenToBuy, tradeAddressOfPairedToken)
                .then(refreshContent)
              }}
            >Spend {nameOfPair}</button>
          </div>
        </div>
      </aside>
    </section>
  )
}

export default BuyListings