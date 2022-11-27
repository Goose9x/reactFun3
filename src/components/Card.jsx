import React, { Component } from "react";
import { Link } from "react-router-dom";

class Card extends Component {
  state = {};
  render() {
    let { user, handleLink, id } = this.props;
    return (
      <>
        <div className='col'>
          <div className='card'>
            <img src={user.avatar} className='card-img-top' alt='...' />
            <div className='card-body'>
              <h4>{user.name}</h4>
              <Link onClick={handleLink} to={`/user/${user.name}`}>
                <button id={id}>More</button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Card;
