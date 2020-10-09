import React, { useState } from "react";

import NavBar from "../NavBar";
import { Steps, Layout, Col, Row, Typography } from "antd";


const { Step } = Steps;
const Text = Typography.Text;


function CounsellingProcess() {
  const [state, setState] = useState({
    current: 0,
  });

  const onChange = curr => {
    console.log('onChange:', state.current);
    setState({ current: curr });
  };

  return (
    <div>
        <Steps current={state.current} type="navigation" size="small" onChange={onChange} direction="horizontal">
            <Step/>
            <Step/>
            <Step/>
            <Step/>
            <Step/>
        </Steps>
        
        <Row style={{padding:"0px 0px 10px 10px", background: "linear-gradient(to top, #4196f8, #8dadf9, #bdc6fb, #e2e1fc, #ffffff)"}}>
            <Col span={5}>
                <Text style={{fontWeight: "500"}}>Initial Engagement</Text>
            </Col>
            <Col span={5}>
                <Text style={{fontWeight: "500"}}>Assess Readiness</Text>
            </Col>
            <Col span={5}>
                <Text style={{fontWeight: "500"}}>Job Search Strategy</Text>
            </Col>
            <Col span={5}>
                <Text style={{fontWeight: "500"}}>Interview in Progress</Text>
            </Col>
            <Col span={4}>
                <Text style={{fontWeight: "500"}}>Placed in Job</Text>
            </Col>
        </Row>
        <Layout style={styles.layout}>
          <Layout.Content style={styles.content}>
          <p style={{padding: "5px 0px 5px 0px"}}></p>
          <Text
            style={{
              color: "#FFF",
              fontSize: "32px",
              fontWeight: "600",
              lineHeight: "26px"
            }}
          >
            My Client
          </Text>
        </Layout.Content>
        </Layout>
        <NavBar />
    </div>
  );
}

const styles = {
  layout: {
    display: "flex",  
    height: "100%",
    background: "linear-gradient(to right, #0057ff 0%, #0099ff 100%)",
    minHeight: "100vh",
    padding: "20px 20px 60px 20px",
    color: "white",
  },
  content: {
    color: "white",
    position: "flex",
    height: "100%",
    minHeight: "100vh",
  }
};

export default CounsellingProcess;