import React, { useState, useEffect } from 'react';
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";


import NavBar from "../NavBar";
import { Layout, Col, Row, Typography, Collapse, Progress, Table, Tag, Space } from "antd";
import { BCard } from "../Styled";
import { FileTextOutlined, CheckSquareOutlined, UserAddOutlined } from '@ant-design/icons';
import HomeClientCard from "./HomeClientCard";

import Bryce1Img from "../img/bryce1.png";
import Gwyneth1Img from "../img/gwyneth1.png";
import Raghav1Img from "../img/raghav1.png";
import Raghav2Img from "../img/raghav2.png";
import JiaMin1Img from "../img/jia_min1.png";

const { Panel } = Collapse;
const Text = Typography.Text;


function Home(props) {
  
  const [clientFullData, setFullData] = useState({});
  const img_vars = [null, Bryce1Img, Raghav2Img, Gwyneth1Img, Raghav1Img, JiaMin1Img];

  useEffect(() => {
    fetch("http://127.0.0.1:5002/get_all").then(res => res.json()).then(clientData => {
    
      var clientIdObject = {}
      for (var singleClientData of clientData.Clients) {
        clientIdObject[singleClientData.clientID] = {};
        clientIdObject[singleClientData.clientID].clientID = singleClientData.clientID;
        clientIdObject[singleClientData.clientID].name = singleClientData.name;
        clientIdObject[singleClientData.clientID].email = singleClientData.client_email;
        clientIdObject[singleClientData.clientID].image = img_vars[singleClientData.clientID];
      }
      
      for (const key in clientIdObject) {
        fetch("http://127.0.0.1:5003/get_status/" + key).then(res => res.json()).then(clientStatusData => {
          if (Object.keys(clientStatusData.entries).length != 0) {
            console.log(clientStatusData);
            clientIdObject[key].employmentStatus = clientStatusData.entries.Employment[1];
            clientIdObject[key].housingStatus = clientStatusData.entries.Housing[1];
            clientIdObject[key].counsellingStatus = clientStatusData.entries.Counselling[1];
          }
          setFullData(clientIdObject);
        });
      }

      console.log(clientIdObject);
    });
  }, []);
  
  if (!clientFullData) {
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
                Object.keys(clientFullData).map((renderData) => (
                  <HomeClientCard
                    key={clientFullData[renderData].clientID}
                    clientID={clientFullData[renderData].clientID}
                    clientImage={clientFullData[renderData].image}
                    clientName={clientFullData[renderData].name}
                    employmentStatus={clientFullData[renderData].employmentStatus}
                    counsellingStatus={clientFullData[renderData].counsellingStatus}
                    housingStatus={clientFullData[renderData].housingStatus}
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