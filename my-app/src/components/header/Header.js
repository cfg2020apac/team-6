import React from "react";
import { withRouter } from "react-router-dom";
import "./Header.scss";
import { Row, Col } from "antd";
import MenuBar from "./MenuBar";
import SideBar from "./SideBar";
import RightMenu from "./RightMenu";
import storage, { isLogin } from "../../utils/storage";


const styles = {
    wrapper: {
      display: "flex",
      alignItems: "center"
    },
    left: {
      display: "flex",
      alignItems: "center"
    },
    logo: {
      cursor: "pointer",
      fontSize: "20px",
      lineHeight: "20px",
      color: "white"
    },
    center: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  };

  
class Header extends React.Component {
  render() {
    const { isMobile, dark } = this.props;
    const loggedIn = storage.get(isLogin);
    return (
      <div
        className="header"
        style={{ background: dark ? "#343637" : "transparent" }}
      >
        <div className="navbar">
          <Row type="flex" style={{ width: "100%" }}>
            <Col xs={12} sm={8} style={styles.left}>
              <span
                style={styles.logo}
                onClick={() => this.props.history.push("/")}
              >
                NEW HOPE
              </span>
            </Col>
            <Col xs={0} sm={8} style={styles.center}>
              {!isMobile && !loggedIn ? <MenuBar flag={!isMobile} /> : <div />}
            </Col>
            <Col xs={12} sm={8} style={{ textAlign: "right" }}>
              {!isMobile ? (
                <RightMenu loggedIn={loggedIn} />
              ) : (
                <SideBar {...this.props} isLogin={loggedIn} />
              )}
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
