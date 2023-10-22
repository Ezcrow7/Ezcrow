import { useState } from "react";







const Filter = () => {

  const [openDropDown, setOpenDropDown] = useState(null)
  const [priceDropDownValue, setPriceDropDownValue] = useState('Price')
  const [currencyDropDownValue, setCurrencyDropDownValue] = useState('Currency')




  const updateDropdownValue = (value) => {
    setOpenDropDown(null)
    setPriceDropDownValue(value)
    setCurrencyDropDownValue(value)
  }





  return (
    <div className="app-container flex items-center gap-x-4 text-sm">
      <div className="relative">
        <div className="flex items-center justify-between py-1.5 w-40 px-2 bg-zinc-200 rounded-sm cursor-pointer" onClick={() => openDropDown === 'price' ? setOpenDropDown('') : setOpenDropDown('price')}>
          <h6 className="pr-3">{priceDropDownValue}</h6>
          <i className="bi bi-chevron-down"></i>
        </div>

        <div className={`absolute left-0 top-10 bg-zinc-300 w-full max-h-60 overflow-auto space-y-1.5 py-2 transition-all duration-75 ${openDropDown === 'price' ? "translate-y-0 scale-y-100" : "scale-y-0 -translate-y-1/2"}`}>
          <h6 className="py-1.5 px-2 cursor-pointer" onClick={() => {
            setPriceDropDownValue("Price")
            setOpenDropDown(null)
          }}>Price</h6>
          <h6 className="py-1.5 px-2 cursor-pointer" onClick={() => {
            setPriceDropDownValue("Trades")
            setOpenDropDown(null)
          }}>Trades</h6>
          <h6 className="py-1.5 px-2 cursor-pointer" onClick={() => {
            setPriceDropDownValue("Completion Rate")
            setOpenDropDown(null)
          }}>Completion Rate</h6>
        </div>
      </div>

      <div className="relative">
        <div className="flex items-center justify-between py-1.5 w-40 px-2 bg-zinc-200 rounded-sm cursor-pointer" onClick={() => openDropDown === 'currency' ? setOpenDropDown('') : setOpenDropDown('currency')}>
          <h6 className="pr-3">{currencyDropDownValue}</h6>
          <i className="bi bi-chevron-down"></i>
        </div>

        <div className={`absolute left-0 top-10 bg-zinc-300 w-full max-h-60 overflow-auto space-y-1.5 py-2 transition-all duration-75 ${openDropDown === 'currency' ? "translate-y-0 scale-y-100" : "scale-y-0 -translate-y-1/2"}`}>
          <h6 className="py-1.5 px-2 cursor-pointer" onClick={() => {
            setCurrencyDropDownValue("USD")
            setOpenDropDown(null)
          }}>USD</h6>
          <h6 className="py-1.5 px-2 cursor-pointer" onClick={() => {
            setCurrencyDropDownValue("ETH")
            setOpenDropDown(null)
          }}>ETH</h6>
          <h6 className="py-1.5 px-2 cursor-pointer" onClick={() => {
            setCurrencyDropDownValue("BTC")
            setOpenDropDown(null)
          }}>BTC</h6>
          <h6 className="py-1.5 px-2 cursor-pointer" onClick={() => {
            setCurrencyDropDownValue("USDC")
            setOpenDropDown(null)
          }}>USDC</h6>
        </div>
      </div>
    </div>
  )
}

export default Filter