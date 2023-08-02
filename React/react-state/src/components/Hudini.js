import React from 'react';

class Hudini extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  toggleVisibility = () => {
    this.setState(prevState => ({ show: !prevState.show }));
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleVisibility}>
          Toggle visibility
        </button>
        <div>
          {this.state.show ? "Now you see me" : "Now you don’t"}
        </div>
      </div>
    );
  }
}

export default Hudini;
