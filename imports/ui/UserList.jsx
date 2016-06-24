
import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Tasks } from '../api/tasks.js';


export default class UserList extends Component { 
  renderUsers() {
  	let users = this.props.users;
  	
   return users.map((x) => {
         return (
          <li key={x._id}>{x.username || x.profile.name || x.emails[0].address}</li>
      );
    }); 
  };
  
  render() {
 
    return (
    	<ul>
          {this.renderUsers()}
        </ul>
    
    )
  };
}
UserList.propTypes = {
  users: PropTypes.array.isRequired,
  currentUser: PropTypes.object, 
};
 
export default createContainer(() => {
  Meteor.subscribe('users');
 
  return {
    users: Meteor.users.find().fetch(),
    currentUser: Meteor.user(),
  };
}, UserList);



