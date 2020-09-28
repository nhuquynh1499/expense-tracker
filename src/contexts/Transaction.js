import React from "react";
import axios from "axios";

export const TransactionContext = React.createContext();
export class TransactionProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      transactions: []
    };

  }

  componentDidMount() {
    axios
      .get("https://api-expense-tracker-codersx.herokuapp.com/api/transaction")
      .then((res) => {
        const transactions = res.data;
        this.setState({ transactions });
      })
      .catch((err) => console.log(err));
  }

  render() {

    return (
      <TransactionContext.Provider
        value={{
          transactions: this.state.transactions
        }}
      >
        {this.props.children}
      </TransactionContext.Provider>
    );
  }
}
