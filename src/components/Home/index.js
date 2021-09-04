// Write your code here
import {Component} from 'react'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'
import './index.css'

class Home extends Component {
  state = {
    isLoggedIn: false,
  }

  logInOrOut = () => {
    this.setState(previousState => ({
      isLoggedIn: !previousState.isLoggedIn,
    }))
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="background-container">
        <div className="home">
          <Message log={isLoggedIn} />
          {!isLoggedIn && <Login func={this.logInOrOut} />}
          {isLoggedIn && <Logout func={this.logInOrOut} />}
        </div>
      </div>
    )
  }
}

export default Home
