import React from "react";
class AboutClass extends React.Component {
  constructor() {
    super();
    this.state = {
      AboutUs: {
        name: "dummy",
        location: "dummy",
        company: "dummy",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/gururajn22");
    const json = await data.json();
    console.log(json);
    this.setState({
      AboutUs: json,
    });
  }

  componentDidUpdate() {
    console.log("update finished");
  }
  componentWillUnmount() {
    console.log("unmounting process");
  }

  render() {
    const { name, location, bio, repos_url } = this.state.AboutUs;
    return (
      <div className="about-card">
        <h2>Name:{name}</h2>
        <h3>location:{location}</h3>
        <h4>Tech stack:{bio}</h4>
        <h4>repo:{repos_url}</h4>
      </div>
    );
  }
}
export default AboutClass;
