
import React from 'react';
import {mount} from 'react-mounter';
// load Layout and Welcome React components
import Header from '../imports/ui/Header.jsx';
import App from '../imports/ui/App.jsx';
import GroupCreation  from '../imports/ui/GroupCreation.jsx';
import UserList  from '../imports/ui/UserList.jsx';

FlowRouter.route("/", {
  action() {
    mount(App, {
        content: (<Header />)
    });
  }
});

FlowRouter.route("/users", {
  action() {
    mount(App, {
        content: (<div><Header /><UserList /></div>)
    });
  }
});

FlowRouter.route("/creation-of-group", {
  action() {
    mount(App, {
        content: (<div><Header /><GroupCreation /></div>)
    });
  }
});

FlowRouter.route("/list-of-group", {
  action() {
    mount(App, {
        content: (<Header />)
    });
  }
});

FlowRouter.route("/page-of-group", {
  action() {
    mount(App, {
        content: (<Header />)
    });
  }
});