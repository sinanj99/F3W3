import React, { useState, useEffect } from "react";
import apiFacade from "./apiFacade";
import "./App.css";

function CryptoTable() {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    apiFacade()
      .allCryptos()
      .then(data => setCryptos(data));
  }, []);

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <td>
              <h4>Symbol</h4>
            </td>
            <td>
              <h4>Symbol</h4>
            </td>
          </tr>
        </thead>
        <tbody>
          {cryptos.map((crypto, index) => (
            <tr key={index}>
              <td>{crypto.symbol}</td>
              <td>{crypto.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CryptoTable;
