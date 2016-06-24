import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
 
export const Groups = new Mongo.Collection('groups');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('groups', function tasksPublication() {
    return Groups.find();
  });
} 

Meteor.methods({
  'groups.insert'(obj) {
    check(obj, Object);
 
    // Make sure the user is logged in before inserting a task
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }
 
    Groups.insert({
      name:obj.name,
      img:obj.img,
      menuItems:obj.menuItems, //array of menu items Objects
      users:obj.users,
      createdAt: new Date(),
      owner: this.userId,
      username: Meteor.users.findOne(this.userId).username,
    });
  },

  'groups.remove'(groupId) {
    check(groupId, String);
 
     const group = Groups.findOne(groupId);
    if (task.owner !== this.userId) {
      // If the task is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Groups.remove(groupId);
  },

  'groups.editMenuItem'(groupId, menuItem,i) {
    check(taskId, String);
    check(menuItem, Object);
    check(i, Number);
 
    let newMenuItems = Groups.findOne(groupId).menuItems;
    newMenuItems[i] = menuItem;
    Groups.update(groupId, { $set: { menuItems: newMenuItems } });
  },

  'groups.deleteMenuItem'(groupId, i) {
    check(groupId, String);
    check(i, Number);
 
    let newMenuItems = Groups.findOne(groupId).menuItems;
    newMenuItems.splice( i, 1 );
    Groups.update(groupId, { $set: { menuItems: newMenuItems } });
  },
  
  'groups.addMenuItem'(groupId, menuItem) {
    check(groupId, String);
 
    let newMenuItems = Groups.findOne(groupId).menuItems;
    newMenuItems.push(menuItem);
    Groups.update(groupId, { $set: { menuItems: newMenuItems } });
  },
});