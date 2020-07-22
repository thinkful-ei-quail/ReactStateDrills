import React from 'react';

class RouletteGun extends React.Component {

  static defaultProps = {
    bulletInChamber: 8
  }

  state = {
    chamber: null,
    spinningTheChamber: false
  }

  buttonClickHandler = () => {
    const newState = {
      spinningTheChamber: true,
    }
    this.setState(newState);
    this.timeout = setTimeout(this.fire, 2000);
  };

  fire = () => {
    const newState = {
      spinningTheChamber: false,
      chamber: Math.ceil(Math.random() * 8)
    };
    this.setState(newState);
    clearTimeout(this.timeout);
  };

  message = () => {
    if(this.state.spinningTheChamber) {
      return 'spinning the chamber and pulling the trigger!';
    }
    return (this.props.bulletInChamber === this.state.chamber) ? 'BANG!!!!' : "you're safe!";
  }

  render() {
    return <div>
      <p>
        {this.message()}
      </p>
      <button onClick={this.buttonClickHandler}>Pull the trigger!</button>
    </div>;
  }
}

export default RouletteGun;