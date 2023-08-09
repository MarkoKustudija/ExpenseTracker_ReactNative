import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'
import { ExpensesContext } from '../../store/expenses-context'
import { GlobalStyles } from '../../constants/styles'

const ExpensesOutput = ({expenses, expensesPerion, fallbackText}) => {

  let content = <Text style={styles.infoText}>{fallbackText}</Text>;

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses = {expenses} periodName={expensesPerion}/>
      {content}
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
    backgroundColor: GlobalStyles.colors.primary700,
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 32,
  },
});