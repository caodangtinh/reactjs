import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    // this.handleIncrement = this.handleIncrement.bind(this);
  }
  state = {
    count: 1,
    image: {
      url:
        "https://cdn-images-1.medium.com/max/800/1*A9xdbbNo5q3Twf4l3yTBNA.png",
      alt: "React & Redux"
    },
    cssClass: "badge badge-primary",
    btnCss: "btn btn-secondary btn-sm",
    tags: ["tag1", "tag2", "tag3", "tag4"]
  };

  style = {
    fontSize: 30,
    fontWeight: "bold"
  };

  handleIncrement = product => {
    this.setState({ count: this.state.count + 1 });
    console.log(product);
  };
  render() {
    return (
      <div>
        {/* <img src={this.state.image.url} /> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => {
            this.handleIncrement({ id: 1 });
          }}
          className={this.state.btnCss}
        >
          Increment
        </button>
        <ul>
          {this.state.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    let { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
