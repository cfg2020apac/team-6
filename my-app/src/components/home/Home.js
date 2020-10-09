import React, { useState, useEffect } from 'react';
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";


import NavBar from "../NavBar";
import { Layout, Col, Row, Typography, Collapse, Progress, Table, Tag, Space } from "antd";
import { BCard } from "../Styled";
import { FileTextOutlined, CheckSquareOutlined, UserAddOutlined } from '@ant-design/icons';
import HomeClientCard from "./HomeClientCard";

const { Panel } = Collapse;
const Text = Typography.Text;


function Home(props) {
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
                      fontSize: "28px",
                      fontWeight: "300",
                      lineHeight: "26px"
                    }}
                  >
                    Home
                  </Text>
                </Col>

                <Link span={5} to="/client-registration">
                  <div style={{
                    display: "flex",
                    flexDirection: "column"
                  }}>
                    <UserAddOutlined style={{color: "#FFF", fontSize: "24px"}}/>
                    <span style={{
                      color: "white",
                      textAlign: "center",
                      fontSize: "11px"
                    }}>Add Client</span>
                  </div>
                </Link>

                <Col span={5}>
                  <div style={{
                      display: "flex",
                      flexDirection: "column"
                    }}>
                    <CheckSquareOutlined style={{color: "#FFF", fontSize: "24px"}}/>
                    <span style={{
                      color: "white",
                      textAlign: "center",
                      fontSize: "11px"
                    }}>To-do</span>
                  </div>
                </Col>
              </Row>  

              <Row
                type="flex"
                justify="space-between"
                style={{ marginBottom: "20px" }}
                gutter={4}
              >
                <Col span={14}>
                  <Text
                    style={{
                      color: "#FFF",
                      fontSize: "16px",
                      fontWeight: "300",
                      lineHeight: "26px"
                    }}
                  >
                    My Clients
                  </Text>
                </Col>

                <Col span={10}>
                  <input 
                    placeholder={"Search for clients..."}
                    style={{
                      width: "100%",
                      fontSize: "11px"
                  }}>
                  </input>
                </Col>
              </Row>
                
              
              <HomeClientCard
                clientName={"Bryce Tan"}
                clientImage={require("../img/bryce1.png")}
                employmentStatus={"Initial Engagement"}
                housingStatus={"Client Eligible"}
                counsellingStatus={"Completed 1st"}
                operationsStatus={"Bed Assigned"}
              />

              <HomeClientCard
                clientName={"Raghav Bhardwaj"}
                clientImage={require("../img/raghav1.png")}
                employmentStatus={"Interview in Process"}
                housingStatus={"Client Eligible"}
                counsellingStatus={"Completed 1st"}
                operationsStatus={"Bed Assigned"}
              />

              <HomeClientCard
                clientName={"Tan Jia Min"}
                clientImage={require("../img/jia_min1.png")}
                employmentStatus={"Interview in Process"}
                housingStatus={"Client Eligible"}
                counsellingStatus={"Completed 1st"}
                operationsStatus={"Bed Assigned"}
              />

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

export default Home;