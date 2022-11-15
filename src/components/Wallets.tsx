import React from 'react'
import { BsThreeDots } from "react-icons/bs";
import wallet1 from "../assets/wallet1.png"
import wallet2 from "../assets/wallet2.png"
import { IWallets } from '../Types';


function Wallets() {
  const wallets:  IWallets[] = [
    {
      name: "BTC (Bitcoin)",
      balance: "1,777.10",
      USD: "9,241,123.31",
      image: wallet1,
    },
    {
      name: "ETH (Ether)",
      balance: "4,251.51",
      USD: "21,112.67",
      image: wallet2,
    },
  ];


  const hour = new Date().getHours();

  let message =  (hour < 10) ? "Good morning" : (hour < 18) ? "Good afternoon" : (hour > 18) ?"Good evening" : "";




  return (
    <div className="text-white">
      <div className="flex justify-between">
        <h4>Wallets</h4>

        <span>{message}</span>
    


        <BsThreeDots />
      </div>
      <div className="grid grid-cols-[1fr_1fr] gap-[2rem] mt-[20px]">
        {
          wallets.map((wallet) => {
            return (
              <div className="flex gap-[2rem] bg-[#0e72c4] bg-opacity-50 p-[1.5rem] rounded-lg">
                <img className="h-[4rem] rounded-full" src={wallet.image} alt="" />
                <div className="flex flex-col gap-[10px] text-white">
                  <h3>{wallet.name}</h3>
                  <div className="">
                    <h4>Balance</h4>
                    <h3>{wallet.balance}</h3>
                  </div>
                  <div className="">
                  <h4>RUB</h4>
                  <h4>{wallet.USD}</h4>
                </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Wallets