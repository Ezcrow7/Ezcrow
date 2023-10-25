import { useEffect, useState } from 'react'
import { getOfferedTokens } from '../appCore/web3ReadFunctions'
import BuyListings from '../components/BuyListings'
import SellListings from '../components/SellListings'
import Filter from '../components/Filter'
import { tokenPairs } from '../appCore/coreVariables'






const Listings = ({ switchedNetwork }) => {
  const [tabToShow, setTabToShow] = useState("buy")
  const [offeredTokens, setOfferedTokens] = useState([])


  useEffect(() => {
    if (switchedNetwork.status) {
      loadListedTokens()
    }
  }, [switchedNetwork.status])



  const loadListedTokens = async () => {
    getOfferedTokens().then(tokens => {
      const updatedArray = tokens?.map((obj) => {
        return tokenPairs?.map((tokenPair) => ({
          ...obj,
          ...tokenPair
        }))
      })

      // console.log('updatedArray', updatedArray.flat());
      setOfferedTokens(updatedArray.flat())
    })
  }





  return (
    <div className="">
      <section className="pt-6 sticky top-0 space-y-4 bg-white">
        <div className="border-b pb-2 shadow">
          <div className="app-container">
            <div className={`grid grid-cols-12 items-center w-44 text-center p-0.5 text-sm font-semibold transition-all duration-500 border-2 ${tabToShow === 'sell' ? "border-red-400" : "border-ezcrow-950"}`}>
              <h3 className={`col-span-6 cursor-pointer px-3 py-2 transition-all duration-500 ${tabToShow === 'buy' && "bg-ezcrow-950 text-white"}`}
                onClick={() => setTabToShow("buy")}
              >Buy</h3>
              <h3 className={`col-span-6 cursor-pointer px-3 py-2 transition-all duration-500 ${tabToShow === 'sell' && "bg-red-400 text-white"}`}
                onClick={() => setTabToShow("sell")}
              >Sell</h3>
            </div>
          </div>
        </div>
        
        {/* START OF FILTER COMPONENTS */}
        <Filter />
        {/* START OF FILTER COMPONENTS */}
      </section>

      <section className="app-container py-8">
        <section className="grid grid-cols-10 text-xs border-b-2 py-1 px-4">
          <aside className="col-span-3">
            Token
          </aside>
          
          <aside className="col-span-2">
            Price
          </aside>

          <aside className="col-span-2">
            Limit/Available
          </aside>

          <aside className="col-span-1">
            Seller
          </aside>
        </section>
        
        {offeredTokens.map((offeredToken, index) => (
          offeredToken?.tokensLeft / Math.pow(10, 6) > 0 &&
          <div key={index} className="">
            {tabToShow === 'buy' ?
              <BuyListings
                offeredToken={offeredToken}
                loadListedTokens={loadListedTokens}
              />
            :
              <SellListings
                offeredToken={offeredToken}
                loadListedTokens={loadListedTokens}
              />
            }
          </div>
        ))
        }
      </section>
    </div>
  )
}

export default Listings