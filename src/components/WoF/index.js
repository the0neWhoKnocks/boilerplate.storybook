import { Component } from 'react'
import { array } from 'prop-types'

class WoF extends Component {
  constructor(props={}){
    super(props)
  }
  
  render(){
    const { items } = this.props;
    
    return (
      <div className="whos-on-first">
        {items.map((data, ndx) => {
          return <div key={ ndx }>{data[0]} on {data[1]}</div>
        })}
      </div>
    )
  }
}

WoF.propTypes = {
  items: array
}

WoF.defaultProps = {
  items: [
    ["Who's", "first"],
    ["What's", "second"],
    ["I Don't Know is", "third"],
  ]
}

export default WoF