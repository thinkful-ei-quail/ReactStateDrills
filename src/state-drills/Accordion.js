import React from 'react';

class Accordion extends React.Component {
  render() {

    const buttons = this.props.sections.map((tab, index) => (
      <li key={index}><button >
        {tab.title}
      </button>
      </li>
    ))

    return (
      <div>
        <ul>
          {buttons}
        </ul>
      </div>
    )
  }

}

export default Accordion