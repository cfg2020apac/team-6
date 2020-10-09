import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import { Typography, Button, Layout, Row, Image, Col } from "antd";
const { Text } = Typography;


function Processes() {
  const [state, setState] = useState({
  });
    
  return (
    <div>
      
      <Layout style={styles.layout}>
        <Layout.Content style={styles.content}>
          <Text
            style={{
              color: "#FFF",
              fontSize: "36px",
              fontWeight: "600",
              lineHeight: "26px"
            }}
          >
            Processes
          </Text>
          <Row style={{ marginTop: "50px" }} />
          <Link to="/employment">
          <Button style={{ height: "120px", width: "100%", borderRadius: "10px" }}>
            <Row style={{alignItems: "center"}}>
              <Col span={8}>
              <Image
                  width={100}
                  style={{ alignItems: "start"}}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
              </Col>
              <Col span={16} style={{ fontSize: "28px" }}>Employment</Col>
            </Row>
          </Button>
          </Link>

          <Row style={{ marginTop: "50px" }} />
          <Link to="/housing">
          <Button style={{ height: "120px", width: "100%", borderRadius: "10px" }}>
            <Row style={{alignItems: "center"}}>
              <Col span={8}>
              <Image
                  width={100}
                  style={{ alignItems: "start"}}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
              </Col>
              <Col span={16} style={{ fontSize: "28px" }}>Housing</Col>
            </Row>
          </Button>
          </Link>

          <Row style={{ marginTop: "50px" }} />
          <Link to="/counselling">
          <Button style={{ height: "120px", width: "100%", borderRadius: "10px" }}>
            <Row style={{alignItems: "center"}}>
              <Col span={8}>
              <Image
                  width={100}
                  style={{ alignItems: "start"}}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
              </Col>
              <Col span={16} style={{ fontSize: "28px" }}>Counselling</Col>
            </Row>
          </Button>
          </Link>

          <Row style={{ marginTop: "50px" }} />
          <Link to="/operation">
          <Button style={{ height: "120px", width: "100%", borderRadius: "10px" }}>
            <Row style={{alignItems: "center"}}>
              <Col span={8}>
              <Image
                  width={100}
                  style={{ alignItems: "start"}}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
              </Col>
              <Col span={16} style={{ fontSize: "28px" }}>Operations</Col>
            </Row>
          </Button>
          </Link>
      
        </Layout.Content>
      </Layout>
      <NavBar/>
    </div>
  );
}

const styles = {
  layout: {
    display: "flex",  
    height: "100%",
    background: "linear-gradient(to right, #0057ff 0%, #0099ff 100%)",
    minHeight: "100vh",
    padding: "20px 20px 60px 20px"
  },
  content: {
    position: "flex",
    height: "100%",
    minHeight: "100vh",
  }
};

export default Processes;