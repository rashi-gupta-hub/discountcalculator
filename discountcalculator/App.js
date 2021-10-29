import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';

export default class App extends React.Component {
  state = { amount: 0, discount: 0, result: 0 };
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            margin: 30,
            fontSize: 25,
            fontWeight: 'bold',
            color: 'red',
            textAlign: 'center',
          }}>
          Discount Calculator
        </Text>
        <View style={styles.inputbox}>
          <Text>Amount in Rs.</Text>
          <TextInput
            style={styles.inputtext}
            onChangeText={(text) => {
              this.setState({ amount: text });
            }}
          />
        </View>
        <View style={styles.inputbox}>
          <Text>Discount in %</Text>
          <TextInput
            style={styles.inputtext}
            onChangeText={(text) => {
              this.setState({ discount: text });
            }}
          />
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.setState({
                finalPrice: (this.state.amount * this.state.discount) / 100,
              });
            }}>
            Calculate
          </TouchableOpacity>
          <Text
            style={
              (styles.resultText,
              { color: this.state.finalPrice ? 'green' : 'red' })
            }>
            The Amount after discount.
          </Text>
          <Text
            style={
              (styles.resultText,
              { color: this.state.finalPrice ? 'green' : 'red' })
            }>
            {this.state.amount -this.state.finalPrice}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'skyblue',
    padding: 8,
  },
  // paragraph: {
  //   margin: 24,
  //   fontSize: 18,
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  // },
  inputbox: {
    marginHorizontal: 30,
  },
  inputtext: {
    backgroundColor: 'white',
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,
    outline: 'none',
    textAlign: 'center',
    fontSize: 20,
  },
  bottom: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 10,
    color: 'white',
  },
  // finalPrice: {
  //   margin: 5,
  //   color: 'red',
  //   fontSize: 18,
  // },
});
