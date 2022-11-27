import React, { Component } from "react";
class Form extends Component {
  state = {};
  render() {
    let { handleSubmit, handleChange, search } = this.props;
    return (
      <>
        <form className='form' action='' onSubmit={handleSubmit}>
          <input
            type='text'
            name='name'
            placeholder='Search User...'
            onChange={handleChange}
            value={search}
          />
          <button>Search</button>
        </form>
      </>
    );
  }
}

export default Form;
