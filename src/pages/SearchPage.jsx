import React, { Component } from "react";
import Form from "../components/Form";
import Card from "../components/Card";
class SearchPage extends Component {
  state = {};
  render() {
    let {
      handleSubmit,
      handleLink,
      user,
      status,
      handleDelete,
      handleChange,
      search,
    } = this.props;
    return (
      <>
        <Form
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          search={search}
        />
        {status === 1 ? (
          ""
        ) : (
          <>
            <div className='Delete'>
              <button onClick={handleDelete}>Clear All</button>
            </div>
            <div className='Card-wrapper'>
              <div className='row row-cols-1 row-cols-md-4 g-4'>
                {user.map((e, i) => {
                  return (
                    <Card handleLink={handleLink} key={i} user={e} id={i} />
                  );
                })}
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}

export default SearchPage;
