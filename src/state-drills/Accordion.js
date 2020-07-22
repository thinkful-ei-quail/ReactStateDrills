import React from 'react';

class Accordion extends React.Component {
static defaultProps = {sections:[]}
  state = {
    currentIndex: 0
  }

  handleButtonClicked = (index) => {
    this.setState({currentIndex: index});
  };

  renderButtons() {
    return this.props.sections.map((section, index) => (
      <li key={index}><button onClick={() => this.handleButtonClicked(index)}>
        {section.title}
      </button>
      {index === this.state.currentIndex ? <p>{section.content}</p>: ''}
      </li>
    ))
  }

  render() {
    return (
      <div>
        <ul>
          {this.renderButtons()}
        </ul>
      </div>
    )
  }

}

export default Accordion