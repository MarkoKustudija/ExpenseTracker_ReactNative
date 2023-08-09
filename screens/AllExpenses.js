import React, { useContext, useEffect, useState } from "react";
import { View, Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { fetchExpenses } from "../util/http";
import LoadingOverlay from '../components/ui/LoadingOverlay';
import ErrorOverlay from '../components/ui/ErrorOverlay';

function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true);
      try {
        const expenses = await fetchExpenses();
        expensesCtx.setExpenses(expenses);
      } catch (error) {
        setError("Could not fetch expenses!");
      }
      setIsFetching(false);
    }
    getExpenses();
  }, []);

  if (isFetching) {
    return <LoadingOverlay />;
  }

  if (error && !isFetching) {
    return <ErrorOverlay message={error} />;
  }

  return (
    <ExpensesOutput
      expenses={expensesCtx.expenses}
      expensesPerion="Total"
      fallbackText="No registered expenses found!"
    />
  );
}

export default AllExpenses;
