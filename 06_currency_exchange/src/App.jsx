import { useState } from "react";
import urlImage from "./assets/pexels-pratikxox-4025825.jpg";
import "./App.css";
import { InputBox } from "./components/InputBox.jsx";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
// If it's a named export, use curly braces and match the exact name.
//If it's the default export, use any name you prefer without curly braces.

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center  bg-black bg-cover"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/14751274/pexels-photo-14751274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
    >
      <div className="w-full  flex justify-end ">
        <div className="w-full max-w-md  border border-gray-60 rounded-lg p-10 backdrop-blur-sm bg-black/30 mr-10">
          <form
            onSubmit={(e) => {
              e.preventDefault(); //when handling form submissions, you often want to prevent the default behavior of the form, which involves a page reload.
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)} //any change in input field will be sent as amount here
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap} //onClick take functions as argument
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable={1} //use can't make change in input field
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from} To {to}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
