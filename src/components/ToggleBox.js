import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import lightbulbon from '../photos/lightbulbon.png';
import lightbulboff from '../photos/lightbulboff.png';

class ToggleBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false,
    };
    this.toggleBox = this.toggleBox.bind(this);
  }

  toggleBox() {
    const { opened } = this.state;
    console.log('here');
    this.setState({
      opened: !opened,
    });
  }

  render() {
    const { opened } = this.state;
    return (
      <div className="box">
        <div className="boxTitleB">
          {opened && (
            <div className="Homepage-background-on">
              <div onClick={this.toggleBox}>
                {opened && (
                  <img className="Homepage-lightbulb" src={lightbulbon}></img>
                )}
                {!opened && (
                  <img className="Homepage-lightbulb" src={lightbulboff}></img>
                )}
              </div>
              <div className="Homepage-content">
                <h1 className="Homepage-welcome-on">Welcome to Sang's Webpage</h1>
                <Link to="/about"><button className="Homepage-who-button"><span>Who</span></button></Link>
                <Link to="/showcase"><button className="Homepage-what-button"><span>What</span></button></Link>
              </div>
            </div>
          )}
          {!opened && (
            <div className="Homepage-background-off">
              <div onClick={this.toggleBox}>
                {opened && (
                  <img className="Homepage-lightbulb" src={lightbulbon}></img>
                )}
                {!opened && (
                  <img className="Homepage-lightbulb" src={lightbulboff}></img>
                )}
              </div>
              <div className="Homepage-content">
                <h1 className="Homepage-welcome-off">Welcome to Sang's Webpage</h1>
                <Link to="/about"><button className="Homepage-who-button"><span>Who</span></button></Link>
                <Link to="/showcase"><button className="Homepage-what-button"><span>What</span></button></Link>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ToggleBox
