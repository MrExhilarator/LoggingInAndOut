// Write your code here
import {Component} from 'react'
import './index.css'

class Logout extends Component {
  render() {
    const {func} = this.props
    return (
      <button className="custom-button" onClick={func} type="button">
        Logout
      </button>
    )
  }
}

export default Logout
