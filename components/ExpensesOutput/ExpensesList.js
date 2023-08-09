import { View, Text, FlatList } from "react-native";
import React from "react";
import ExpenseItem from "./ExpenseItem";



const ExpensesList = ({ expenses }) => {
  // from dummy_data


  function renderExpenseItem(itemData) {
    return <ExpenseItem {...itemData.item} />;
  }

  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ExpensesList;
