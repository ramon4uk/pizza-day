import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('users', function() {
  if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    };
  return Meteor.users.find();
  });
}