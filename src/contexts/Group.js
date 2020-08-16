import React, { Component } from "react";
import axios from "axios";

export const GroupContext = React.createContext();
export class GroupProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groups: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/api/group")
      .then((res) => {
        const groups = res.data;
        this.setState({ groups });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <GroupContext.Provider value={{ groups: this.state.groups }}>
        {this.props.children}
      </GroupContext.Provider>
    );
  }
}
