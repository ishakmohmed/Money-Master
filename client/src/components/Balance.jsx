import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Balance() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="balance-container">
        <h4>Balance</h4>
        <h2>RM {total}</h2>
    </div>
  );
}

export default Balance;
