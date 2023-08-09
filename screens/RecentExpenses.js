import { View, Text } from 'react-native'
import React from 'react'
import ExpensesOutput from '../components/ExpensesOutput'

const RecentExpenses = () => {
  return (
    <View>
      <ExpensesOutput expensesPerion= 'Last 7 days' />
    </View>
  )
}

export default RecentExpenses