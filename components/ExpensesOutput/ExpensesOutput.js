import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'
import { ExpensesContext } from '../../store/expenses-context'
import { GlobalStyles } from '../../constants/styles'

const ExpensesOutput = ({expenses, expensesPerion}) => {

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses = {expenses} periodName={expensesPerion}/>
      <ExpensesList  expenses={expenses}/>
    </View>
  )
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700
  }
});