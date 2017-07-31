import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
       <div>It is {this.state.date.toLocaleTimeString()}.</div>
    );
  }
}
