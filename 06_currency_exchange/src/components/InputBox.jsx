import React, { useState } from "react";

export function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,

  className = "",
}) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex  ${className}`}>
      {/* the above styling is different so add user specified styling */}
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block">{label}</label>
        <input
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          value={amount}
          disabled={amountDisable} //false i.e use can make changes in input field
          onChange={
            (e) => onAmountChange && onAmountChange(Number(e.target.value)) //if onAmountChange contains function it means we can update value but in 2nd component
            //as it disabled so we can't change value
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange(e.target.value)} //pass e.target.value in app.jsx so that it will be displayed everywhere
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {/* note: Always use key while looping and mapping over an array in React to display a component because that's how react will get to know 
                  that the option tags it is creating are different from previous all and not same  */}
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
