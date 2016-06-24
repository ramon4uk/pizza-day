import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';

// Header component - represents header and naw bar of the Application.
export default class Header extends Component {
 
 
  render() {
 
    return (
     <header className="navbar navbar-default"> 
        <div className="navbar-header">
          <a className="navbar-brand" href="/"></a>
          <a className="navbar-brand" href="/">Home</a>
        </div>
        <div className="collapse navbar-collapse">
          <nav className="nav navbar-nav">
            <li>
              <a href="/users">Users</a>
            </li>
            <li>
              <a href="/creation-of-group">Groups</a>
            </li>
          </nav >
          <ul className="nav navbar-nav navbar-right">
            <AccountsUIWrapper />
          </ul>
        </div>
      </header>
    );
  }
}
 
Header.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
};