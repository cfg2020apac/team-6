import React from "react";
import { withRouter } from "react-router-dom";
import { Button, Menu, Dropdown } from "antd";
import { UserOutlined } from '@ant-design/icons';
import storage, { isLogin, userType } from "../../utils/storage";

class RightMenu extends React.Component {
  menu = () => {
    return (
      <Menu>
        <Menu.Item>
          <span onClick={this.onAccount}>Account</span>
        </Menu.Item>
        {/*<Menu.Item>*/}
        {/*  <span onClick={this.onProfile}>Profile</span>*/}
        {/*</Menu.Item>*/}
        <Menu.Item>
          <span onClick={this.onLogout}>Logout</span>
        </Menu.Item>
      </Menu>
    );
  };

  onAccount = () => {
    const type = storage.get(userType);
    switch (userType) {
      case "C":
        this.props.history.push("/client");
      case "E":
        this.props.history.push("/coach");
      case "H":
        this.props.history.push("/hdbrep");
      default:
        this.onLogout();
    }
  };

  onLogout = () => {
    storage.remove(isLogin);
    storage.remove(userType);
    this.props.history.push("/");
  };

  render() {
    const { loggedIn } = this.props;
    if (loggedIn != undefined && loggedIn) {
      return (
        <div>
          <Dropdown overlay={this.menu} placement="bottomRight">
            <UserOutlined />
          </Dropdown>
        </div>
      );
    } else {
      return (
        <div>
          <a href="/login" style={{ fontSize: "15px", color: "white" }}>
            Login
          </a>
          <Button
            type="primary"
            size="large"
            style={{ marginLeft: "15px" }}
            onClick={() => this.props.history.push("/signup")}
          >
            Sign Up
          </Button>
        </div>
      );
    }
  }
}

export default withRouter(RightMenu);
