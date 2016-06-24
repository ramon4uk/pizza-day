import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Tasks } from '../api/tasks.js';


export default class GroupPage extends Component { 
   constructor(props) {
    super(props);
 
    this.state = {
      menuItemId: 0,
    };
  }

  handleSubmitEdit(event) {
    event.preventDefault();
 
    // Find the text field via the React ref
    const obj ={name:ReactDOM.findDOMNode(this.refs.itemName).value.trim(),
                price:ReactDOM.findDOMNode(this.refs.itemPrice).value.trim();};
    const id = ReactDOM.findDOMNode(this.refs.itemForm).key.trim();

    //Check if we are creating or editing menu item
    (!id) ? Meteor.call('groups.addMenuItem',this.prop.group.id, obj) : Meteor.call('groups.editMenuItem',this.prop.group.id, obj,id);
    
    // Clear form
    ReactDOM.findDOMNode(this.refs.itemForm).delete;//this row should be changed!!!
  }
  
  deleteItem(i) {
    Meteor.call('groups.deleteMenuItem',this.prop.group.id, i);

  };

  editItem(x,i) {
  return( 
            <form className="edit-menu-item" ref = "itemForm" key = {i}  onSubmit={this.handleSubmitEdit.bind(this)}>
              Name:
              <input type="text" ref="itemName" value = {x.name}><br>
              Price:
              <input type="text" ref="itemPrice" value = {x.price}><br>
              <input type = "submit" value = "edit">     
            </form>
      );
  };


  renderUsers() {
  	let users = this.props.users;
  	
   return users.map((x) => {
         return( 
            <div>
                  <h1>  </h1>
                   <li key={x._id}>{x.username || x.profile.name || x.emails[0].address}</li>
            </div>
      );
    }); 
  };

  renderMenuItems() {
    let menuItems = this.props.group.menyItems;
    
    return menuItems.map((x,i) => {
      return( 
        <li key={i}>
        {x.name}:{x.price} 
        <button type="button" class="btn btn-primary" onClick={this.deleteItem(i).bind(this)}>Delete</button>
        <button type="button" class="btn btn-primary" onClick={this.editItem(x,i).bind(this)}>Edit</button>
        </li>
      );
    }); 
  };


  
  render() {
    let group = this.props.group;
    const placejolder = {name:"Input item name",
                         price:"Input item price"};
    return (
      <div>
        <h1> {group.name} </h1>
        <img src={group.img} className="img-responsive img-circle" alt="Group logo">
        <ul>
          this.renderMenuItems(); 
        </ul>
        <button type="button" class="btn btn-primary" onClick={this.editItem(x,-1).bind(this)}>Edit</button>>Add menu item</button>
          <li key={x._id}>{x.username || x.profile.name || x.emails[0].address}</li>
      </div>
    )
  };
}
GroupPage.propTypes = {
  users: PropTypes.array.isRequired,
  currentUser: PropTypes.object, 
};
 
export default createContainer(() => {
  Meteor.subscribe('groups');
  Meteor.subscribe('users');
  return {
    users: Meteor.users.find().fetch(),
    currentUser: Meteor.user(),
    group = Groups.find({_id:this.props.key}).fetch();
  };
}, GroupPage);