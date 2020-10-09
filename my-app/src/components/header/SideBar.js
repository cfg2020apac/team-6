import React from "react";

import { Collapse, Button } from "antd";
import { BarsOutlined } from '@ant-design/icons';
import { BDrawer } from "../Styled";
import "./SideBar.scss";

const Panel = Collapse.Panel;

class SideBar extends React.Component {
  state = { visible: false };
  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  componentDidMount() {
    console.log("side bar mount");
  }
  render() {
    return (
      <div>
        <BarsOutlined 
          type="bars"
          style={{ fontSize: "26px", color: "white" }}
          onClick={() => {
            this.showDrawer();
          }}
        />
        <BDrawer
          placement="right"
          title="Menu"
          visible={this.state.visible}
          onClose={this.onClose}
        >
          <div className="item">
            <a href="/">Home</a>
          </div>
          <div className="item">
            <a href="/talent">Talents</a>
          </div>
          <div className="item">
            <a href="/employer">Employers</a>
          </div>
          <div className="item">
            <a href="/recruiter">Recruiters</a>
          </div>
          <div className="item">
            <a href="/faq">FAQs</a>
          </div>
          <div className="action">
            <a href="/login">Login</a>
            <Button
              type="primary"
              onClick={() => {
                this.props.history.push("/signup");
              }}
            >
              Sign Up
            </Button>
          </div>
        </BDrawer>
      </div>
    );
  }
}

export default SideBar;
