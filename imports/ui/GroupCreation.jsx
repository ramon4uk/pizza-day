import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';

//Form for creating  groups 
export default class GroupCreation extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      menuItemId: 0,
    };
  }

  handleSubmitGroupCreation(event) {
    event.preventDefault();
  
  }
  

  render() {

    return (

      <form className="group-creation"  onSubmit={this.handleSubmitGroupCreation.bind(this)}>
      <div className="form-group">
        <label for="title">Name</label>
        <div>
          <input name="title" id="title" type="text" value="" placeholder="Group's name" className="form-control input" required/>
        </div>
      </div>
      <div className="form-group">
        <label for="logo">Logo</label>
        <div>
          <input name="logo" id="logo" type="text" value=""  accept="image/*" placeholder="Enter logo url" class="form-control input"/>
        </div>
      </div>
      <input type="submit" value="Create!" className="btn btn-default"/>
      </form>
    );
  }
}

GroupCreation.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
};