import React from 'react';

class Bomb extends React.Component {
  state = {
    count: 0
  };


//mounts the component to the DOM
componentDidMount() {  
  this.interval = setInterval(() => {    
    this.setState({
      count: this.state.count + 1
    })
  }, 1000)
}

  //unmounts component from the DOM
  componentWillUnmount() {
    clearInterval(this.interval)
  }

  //Boom when count >= 8
  boom(){
    if ( this.state.count >= 8){
      return 'BOOM!!!!!'
    } else { return this.state.count % 2 == 0 ? 'tick' : 'tock'}
  }

  render() {
    return <div>
      <p>{this.boom()}</p>
      
    </div>
  }
}

export default Bomb