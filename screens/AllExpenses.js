import React, { useContext, useEffect } from "react";
import { View, Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { fetchExpenses } from "../util/http";

function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  // useEffect(() => {
  //   async function getExpenses() {
  //     const expenses = await fetchExpenses();
  //     expensesCtx.setExpenses(expenses);
  //   }
  //   getExpenses();
  // })

  return (
    <ExpensesOutput
      expenses={expensesCtx.expenses}
      expensesPerion="Total"
      fallbackText="No registered expenses found!"
    />
  );
}

export default AllExpenses;
