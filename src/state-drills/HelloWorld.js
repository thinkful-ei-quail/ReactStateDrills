import React from 'react';

class HelloWorld extends React.Component {
  state = {
    who: 'world'
  };
  handleButtonClick = (word) => {
    const newState = {who: word};
    this.setState(newState);
  };
  render() {
    return <div>
      <p>Hello, {this.state.who}</p>
      <button onClick={() => this.handleButtonClick('world')}>World</button>
      <button onClick={() => this.handleButtonClick('friend')}>Friend</button>
      <button onClick={() => this.handleButtonClick('react')}>React</button>
    </div>;
  }
}

export default HelloWorld;