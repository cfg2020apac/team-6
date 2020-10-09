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
  const [clientData, setCurrentData] = useState(0);
  
  useEffect(() => {
    fetch("http://127.0.0.1:4000/get_all").then(res => res.json()).then(clientData => {
      setCurrentData(clientData);
      console.log(clientData);
    });
  }, []);
  
  if (!clientData) {
    return null;
  }

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
                
              {
                clientData.Clients.map((clientDetails) => (
                  <HomeClientCard
                    key={clientDetails.clientID}
                    clientName={clientDetails.name}
                    clientImage={require("../img/bryce1.png")}
                    employmentStatus={clientDetails.employment_status}
                  />
                ))
              }

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