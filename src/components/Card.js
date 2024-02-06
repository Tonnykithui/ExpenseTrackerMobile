import { View, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";

export const CardDisp = () => {
  let transactions = useSelector((state) => state.expense);
  let income = transactions.filter((item) => item.income !== false);
  let totalIncome = 0;
  income.forEach((item) => {
    totalIncome = Number(item.amount) + totalIncome;
  });

  let expense = transactions.filter((item) => item.income !== true);
  let totalExpense = 0;
  expense.forEach((item) => {
    totalExpense = Number(item.amount) + totalExpense;
  });

  let totalBalance = totalIncome + totalExpense;
  return (
    <View style={styles.cardContainer}>
      <LinearGradient
        colors={["#5a67d8", "#8256ff", "#ff6b81"]}
        style={styles.cardGradient}
      >
        {/* <Text style={styles.cardText}>Your Card Content</Text> */}
        <View>
          <Text style={styles.cardTotBalanceText}>Total Balance</Text>
          <Text style={[styles.cardTotBalanceText, styles.cardTotBalText]}>
            {totalBalance}
          </Text>
        </View>
        <View style={styles.cardBalIncomeExpese}>
          <View style={[styles.cardIncome, styles.cardIncomeDetails]}>
            <MaterialCommunityIcons
              name="briefcase-download"
              size={24}
              color="white"
            />
            <View>
              <Text style={styles.cardTotBalanceText}>Income</Text>
              <Text
                style={[
                  styles.cardTotBalanceText,
                  styles.cardIncomeExpenseText,
                ]}
              >
                {totalIncome}
              </Text>
            </View>
          </View>
          <View style={[styles.cardExpense, styles.cardIncomeDetails]}>
            <MaterialCommunityIcons
              name="briefcase-upload"
              size={24}
              color="white"
            />
            <View>
              <Text style={styles.cardTotBalanceText}>Expense</Text>
              <Text
                style={[
                  styles.cardTotBalanceText,
                  styles.cardIncomeExpenseText,
                ]}
              >
                {totalExpense}
              </Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10,
    overflow: "hidden",
  },
  cardGradient: {
    padding: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  cardText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  cardTotBalanceText: {
    color: "white",
    fontWeight: "bold",
  },
  cardTotBalText: {
    fontSize: 30,
  },
  cardBalIncomeExpese: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardIncome: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  cardExpense: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  cardIncomeDetails: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  cardIncomeExpenseText: {
    fontSize: 20,
  },
});
