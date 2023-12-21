import { View, StyleSheet, Text, Dimensions, FlatList } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Transactions = () => {

    const transactions = [
      {
        id: 1,
        income: true,
        amount: 2400,
        description: "side hustle"
      },
      {
        id: 2,
        income: false,
        amount: 1400,
        description: "Sandals"
      },
      {
        id: 3,
        income: true,
        amount: 22400,
        description: "Pay"
      },
      {
        id: 4,
        income: true,
        amount: 2400,
        description: "side hustle 2"
      },
      {
        id: 168,
        income: true,
        amount: 2400,
        description: "side hustle"
      },
      {
        id: 246,
        income: false,
        amount: 1400,
        description: "Sandals"
      },
      {
        id: 223,
        income: true,
        amount: 22400,
        description: "Pay"
      },
      {
        id: 344,
        income: true,
        amount: 2400,
        description: "side hustle 2"
      },
      {
        id: 122,
        income: true,
        amount: 2400,
        description: "side hustle"
      },
      {
        id: 21,
        income: false,
        amount: 1400,
        description: "Sandals"
      },
      {
        id: 32,
        income: true,
        amount: 22400,
        description: "Pay"
      },
      {
        id: 43,
        income: true,
        amount: 2400,
        description: "side hustle 2"
      }
    ]
    const renderItem = ({ item }) => {
        return (
            <View style={styles.TransactionItem}>
              <View>
                {
                    item.income ? 
                    <MaterialCommunityIcons name="cash-multiple" size={24} color="#000080" /> :
                    <MaterialCommunityIcons name="cash-plus" size={24} color="#ff4500" /> 
                }
              </View>
              <View style={styles.TransactionsItemValues}>
                <Text>{item.description}</Text>
              </View>
              <View style={styles.TransactionsItemValues}>
                <Text>{item.amount}</Text>
              </View>
              <View>
                <MaterialCommunityIcons name="delete" size={24} color="red" />
              </View>
            </View>
        )
    }
    return (
        <View style={styles.Transactions}>
            <View>
                <Text style={styles.TransactionTopText}>Transactions</Text>
            </View>
            <View style={{height: 'auto'}}>
                <FlatList 
                data={transactions}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                />
            </View>
        </View>
    )
}

export default Transactions;

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    Transactions: {
        height: height - (height/3.5 + 60),
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 30,
        backgroundColor: 'white',
        width: '100%'
    },
    TransactionTopText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    TransactionItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        backgroundColor: '#b0e0e6',
        marginTop: 5,
        paddingBottom: 10,
        padding: 4,
        borderRadius: 5
    },
    TransactionsItemValues: {
      flex: 1,
      justifyContent: 'center',
      paddingLeft: 40 
    }
})