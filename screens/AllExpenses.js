import React from "react";
import { View, Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

function AllExpenses() {
  return (
    <View>
      <ExpensesOutput expensesPerion= 'Total' />
    </View>
  );
}

export default AllExpenses;
