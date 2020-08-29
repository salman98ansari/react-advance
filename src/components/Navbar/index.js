import React, { Component } from 'react';
import LeftMenu from './LeftMenu'
//import RightMenu from './RightMenu'
import { Drawer, Button } from 'antd';
import './Navbar.css';

class Navbar extends Component {
	state = {
    current: 'mail',
    visible: false
  }
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <nav className="menu">
        <div className="menu__logo">
          <a href="">Logo</a>
        </div>
        <div className="menu__container">
          <div className="menu_left">
            <LeftMenu mode="horizontal" />
          </div>
          <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
		          <span className="barsBtn"></span>
		        </Button>
          <Drawer
            title="Basic Drawer"
            placement="left"
            className="menu_drawer"
            closable={true}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <LeftMenu mode="inline" />
          </Drawer>
        </div>
      </nav>
    );
  }
}

export default Navbar;