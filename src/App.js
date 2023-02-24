import React, { useState } from "react";
import { ethers } from "ethers";
import lighthouse from "@lighthouse-web3/sdk";

function App() {
  const [address, setAddress] = useState("");
  const connectWallet = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      alert("Please install the Metamask Extension!");
    }
    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      // await issueCredId(issuerName, accounts[0]);
      setAddress(accounts[0]);
    } catch (err) {
      if (err.code === 4902) {
        try {
          const accounts = await ethereum.request({
            method: "eth_requestAccounts",
          });
          // await issueCredId(issuerName, accounts[0]);
          setAddress(accounts[0]);
        } catch (err) {
          alert(err.message);
        }
      }
    }
  };

  return (
    <div className="App">
      {address == "" ? (
        <button
          style={{ justifyContent: "center" }}
          onClick={() => connectWallet()}
        >
          Connect
        </button>
      ) : (
        <span>{address}</span>
      )}
      <br />
      {address != "" && <input type="file" />}
    </div>
  );
}

export default App;
