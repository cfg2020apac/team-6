import React from "react";

import NavBar from "../NavBar";
import { Layout, Col, Row, Typography, Collapse, Progress, Table, Tag, Space } from "antd";
import { BCard } from "../Styled";
import { FileTextOutlined, CheckSquareOutlined, UserAddOutlined } from '@ant-design/icons';
import Avatar from 'antd/lib/avatar/avatar';
import { requirePropFactory } from '@material-ui/core';

const { Panel } = Collapse;
const Text = Typography.Text;

function ClientRegistration(props) {
    return (
        <div>
            <Layout style={styles.layout}>
                <Layout.Content style={styles.content}>
                <Row
                    type="flex"
                    justify="space-between"
                    style={{ marginBottom: "10px" }}
                    gutter={4}
                >
                
                    <Col span={14}>
                    <Text
                        style={{
                        color: "#FFF",
                        fontSize: "24px",
                        fontWeight: "300",
                        lineHeight: "26px"
                        }}
                    >
                        Home
                    </Text>
                    </Col>

                    <Col span={5} to="/client-registration">
                    <div style={{
                        "display": "flex",
                        "flex-direction": "column"
                    }}>
                        <UserAddOutlined style={{color: "#FFF", fontSize: "24px"}}/>
                        <span style={{
                        "color": "white",
                        "text-align": "center",
                        "font-size": "11px"
                        }}>Add Client</span>
                    </div>
                    </Col>

                    <Col span={5}>
                    <div style={{
                        "display": "flex",
                        "flex-direction": "column"
                        }}>
                        <CheckSquareOutlined style={{color: "#FFF", fontSize: "24px"}}/>
                        <span style={{
                        "color": "white",
                        "text-align": "center",
                        "font-size": "11px"
                        }}>To-do</span>
                    </div>
                    </Col>
                </Row>  

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

export default ClientRegistration;