import React, { Component } from "react";
import styles from "./ClassComponentTest.module.css";

class ClassComponentTest extends Component {
  constructor() {
    super();

    this.state = {
      name: "Gabriel",
      secondName: "Robert",
      title: "This is my class component for Robert",
    };
  }
  render() {
    return (
      <>
        <h2>{this.state.title}</h2>
        <div className={styles.helloDiv}>{this.state.name} say hi!</div>
        <button
          className={styles.changeNameButton}
          onClick={() => this.setState({ name: this.state.secondName })}
        >
          Update name
        </button>
      </>
    );
  }
}

export default ClassComponentTest;
