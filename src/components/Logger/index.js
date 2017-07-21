import { Component } from 'react';
import { css } from 'glamor';

const _styles = {
  base: {
    color: '#888',
    font: '20px Helvetica, Arial, sans-serif',
    fontWeight: 'bold',
    padding: '0.5em 1em',
    border: 'solid 1px',
    borderLeftWidth: '0.5em',
    marginTop: '0.5em',
    background: '#eee'
  },
  log: {},
  warn: {
    color: '#e87800',
    background: '#fffbcd'
  },
  error: {
    color: '#d2004c',
    background: '#ffe8e8'
  },
  info: {
    color: '#0a7eb7',
    background: '#e1f3f7'
  }
};

class Logger extends Component {
  constructor(props={}){
    super(props);
  }
  
  render(){
    const rootStyles = css({
      ..._styles.base,
      ..._styles[this.props.type]
    });
    
    return (
      <div { ...rootStyles }>{ this.props.message }</div>
    );
  }
}

export default Logger;