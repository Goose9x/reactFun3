import React, { Component } from "react";

class UserPage extends Component {
  state = {};
  render() {
    let { profile, repo } = this.props;
    return (
      <>
        <div className='userProfile'>
          <div className='image'>
            <img src={profile[0].avatar} alt='' />
          </div>
          <div className='button'>
            <a href={profile[0].link}>
              <button>Visit Github Profile</button>
            </a>
            <h6>Username: {profile[0].name}</h6>
            <h6>
              Location: &nbsp;
              {profile[0].location === null ? "Unknown" : profile[0].location}
            </h6>
          </div>
        </div>
        <div className='follow'>
          <span className='follow-1'>Followers: {profile[0].followers}</span>
          <span className='follow-2'>Following: {profile[0].following}</span>
          <span className='follow-3'>Publics Repos: {profile[0].repos}</span>
          <span className='follow-4'>Publics Gists: {profile[0].gists}</span>
        </div>
        {repo.map((e, i) => (
          <div key={i} className='repos'>
            <a href={e.link}>
              <h5>{e.name}</h5>
            </a>
          </div>
        ))}
      </>
    );
  }
}

export default UserPage;
