// Write your code here
import {Component} from 'react'
import './index.css'

class Message extends Component {
  render() {
    const {log} = this.props
    return (
      <div>
        {log && <h1 className="message">Welcome User</h1>}
        {!log && <h1 className="message">Please Login</h1>}
      </div>
    )
  }
}

export default Message
