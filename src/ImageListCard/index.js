import {Component} from 'react'
import './index.css'

class ImagesListCard extends Component {
  render() {
    return (
      <div className="bg-container">
        <div className="navdiv">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
            className="logo-img"
          />
          <div>
            <p>Score: {0}</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
              className="timer"
            />
            <p>{0} sec</p>
          </div>
        </div>

        <p>fklsdaj</p>
      </div>
    )
  }
}
export default ImagesListCard
