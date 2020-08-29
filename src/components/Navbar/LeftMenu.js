import React, { Component } from 'react';
import { Menu } from 'antd';

class LeftMenu extends Component {
  render() {
    return (
      <Menu mode={this.props.mode}>
        <Menu.Item key="mail">
          <a href="">Home</a>
        </Menu.Item>
        <Menu.Item>
          <a >Contact Us</a>
        </Menu.Item>
        <Menu.Item >
          <a >Contact me</a>
        </Menu.Item>
        <Menu.Item >
          <a >Contact me</a>
        </Menu.Item>
        <Menu.Item >
          <a >Contact me</a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default LeftMenu;