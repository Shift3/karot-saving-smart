import { View, Text, StyleSheet } from "react-native";
import BudgetCard from "../Components/BudgetCard";

function Overview() {
  return (
    <View style={styles.container}>
      <View style={styles.budgetCardHolder}>
        <BudgetCard />
      </View>
      <View style={styles.expenseCardHolder}>
        <Text>Expense Card Goes Here</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  budgetCardHolder: {
    marginTop: 30,
    width: "100%",
  },
  expenseCardHolder: {
    marginTop: 20,
  },
});

export default Overview;
