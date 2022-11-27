import "./App.css";
import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import AboutPage from "./pages/AboutPage";
import UserPage from "./pages/UserPage";
class App extends Component {
  state = {
    search: "",
    user: [{ name: "", avatar: "" }],
    status: 1,
    profile: [
      {
        name: "",
        location: "",
        avatar: "",
        link: "",
        followers: 0,
        following: 0,
        repos: 0,
        gists: 0,
      },
    ],
    repo: [{ name: "", link: "" }],
  };
  handleLink = (e) => {
    let user = this.state.user;
    let index = e.target.id;
    let name = user[index].name;
    console.log(name);
    fetch(`https://api.github.com/users/${name}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        this.setState({
          profile: [
            {
              name: data.login,
              location: data.location,
              avatar: data.avatar_url,
              link: data.html_url,
              followers: data.followers,
              following: data.following,
              repos: data.public_repos,
              gists: data.public_gists,
            },
          ],
        });
      });
    fetch(`https://api.github.com/users/${name}/repos`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        let repoList = [];
        for (let i = 0; i < data.length; i++) {
          // console.log(data[i].name);
          // console.log(data[i].html_url);
          repoList = [
            ...repoList,
            { name: data[i].name, link: data[i].html_url },
          ];
        }
        this.setState({ repo: repoList });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };
  handleDelete = (e) => {
    this.setState({ status: 1, search: "" });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let userName = e.target.name.value;
    fetch(`https://api.github.com/search/users?q=${userName}`)
      .then((res) => res.json())
      .then((data) => {
        let newUser = [];
        for (let i = 0; i < data.items.length; i++) {
          newUser.push({
            name: data.items[i].login,
            avatar: data.items[i].avatar_url,
          });
        }
        this.setState({ user: newUser, status: 0, search: "" });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <>
        <div className='nav'>
          <div className='left'>
            <Link to='/'>
              <ion-icon name='logo-github'></ion-icon>Github Finder
            </Link>
          </div>
          <div className='right'>
            <div onClick={this.handleDelete} className='homeLink'>
              <Link to='/'>Home</Link>
            </div>
            <div className='aboutLink'>
              <Link to='/about'>About</Link>
            </div>
          </div>
        </div>
        <Routes>
          <Route
            path='/'
            element={
              <SearchPage
                handleSubmit={this.handleSubmit}
                handleDelete={this.handleDelete}
                handleChange={this.handleChange}
                handleLink={this.handleLink}
                user={this.state.user}
                status={this.state.status}
                search={this.state.search}
              />
            }
          ></Route>
          <Route path='/about' element={<AboutPage />}></Route>
          <Route
            path='/user/:username'
            element={
              <UserPage repo={this.state.repo} profile={this.state.profile} />
            }
          ></Route>
        </Routes>
      </>
    );
  }
}

export default App;
