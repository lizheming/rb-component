import React from 'react';

export default class extends React.Component {
  static defaultProps = {
    key: ''
  }
  render() {
    return (
      <div className={'rb-tree__node ' + (this.props.className || '')} key={this.props.key}>
          {this.props.children}
      </div>);
  }
}
