import React, { Component } from "react";
import axios from "axios";

export const GroupContext = React.createContext();
export class GroupProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groups: [],
    };

    this.getInforGroup = this.getInforGroup.bind(this);
  }

  componentDidMount() {
    axios
      .get("https://api-expense-tracker-codersx.herokuapp.com/api/group")
      .then((res) => {
        const groups = res.data;
        this.setState({ groups });
      })
      .catch((err) => console.log(err));
  }

  getInforGroup(id) {
    const { groups } = this.state;
    const group = groups.find((item) => item._id === id);
    return group ? { name: group.name, icon: group.icon, addSum: group.addSum } : null;
  }

  render() {
    return (
      <GroupContext.Provider
        value={{ 
          groups: this.state.groups, 
          getInforGroup: this.getInforGroup 
        }}
      >
        {this.props.children}
      </GroupContext.Provider>
    );
  }
}
