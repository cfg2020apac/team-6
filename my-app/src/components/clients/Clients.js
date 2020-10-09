import React from "react";

import NavBar from "../NavBar";
import { Layout, Col, Row, Typography, Collapse, Progress, Table, Tag, Space } from "antd";
import { BCard } from "../Styled";
import { FileTextOutlined, CalendarOutlined } from '@ant-design/icons';

const { Panel } = Collapse;
const Text = Typography.Text;


function callback(key) {
  console.log(key);
}

function Clients() {
  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;

  const columns = [
    {
      title: 'No',
      dataIndex: 'key',
      key: 'key',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Client name',
      dataIndex: 'client_name',
      key: 'client_name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Coach name',
      dataIndex: 'coach_name',
      key: 'coach_name',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    }
  ];
  
  const data = [
    {
      key: '1',
      client_name: 'John Brown',
      coach_name: "Victor",
      tags: ['done'],
    },
    {
      key: '2',
      client_name: 'Jim Green',
      coach_name: "Victor",
      tags: ['in progress'],
    },
    {
      key: '3',
      client_name: 'John Brown',
      coach_name: "Gwyneth",
      tags: ['in progress'],
    },
  ];


  return (
    <div>
    <Layout style={styles.layout}>
      <Layout.Content style={styles.content}>
      <Row
        type="flex"
        justify="space-between"
        style={{ marginBottom: "20px" }}
        gutter={4}
      >
        <Col span={18}>
          <Text
            style={{
              color: "#FFF",
              fontSize: "24px",
              fontWeight: "300",
              lineHeight: "26px"
            }}
          >
            Bryce Tan
          </Text>
        </Col>
        <Col span={3}>
          {/* <FileTextOutlined type="edit" onClick={() => props.onEdit(record)}/> */}
          <FileTextOutlined style={{color: "#FFF", fontSize: "24px"}}/>
        </Col>
        <Col span={3}>
          <CalendarOutlined style={{color: "#FFF", fontSize: "24px"}}/>
        </Col>
      </Row>

      <BCard title="Employment">
        <Row style={{fontSize: "14px", fontWeight: "800", marginBottom: "10px"}}>Career Coach: Raghav</Row>
        <Row style={{fontSize: "12px"}}>Current Progress:</Row>
        <Progress percent={40} status="active" />
        <Row style={{marginBottom: "10px"}}/>
        <Collapse onChange={callback}>
          <Panel header="Initial engagement with client" key="1">
            <p>{text}</p>
          </Panel>
          <Panel header="Client readiness for work" key="2">
            <p>{text}</p>
          </Panel>
          <Panel header="Job search strategy" key="3" disabled>
            <p>{text}</p>
          </Panel>
          <Panel header="Interview in progress" key="4" disabled>
            <p>{text}</p>
          </Panel>
          <Panel header="Placed in job" key="5" disabled>
            <p>{text}</p>
          </Panel>
        </Collapse>
      </BCard>
      <Row style={{marginBottom: "20px"}}/>
      <BCard title="Housing">
        <Row style={{fontSize: "14px", fontWeight: "800", marginBottom: "10px"}}>HDB Rep: Supriya</Row>
        <Row style={{fontSize: "12px"}}>Current Progress:</Row>
        <Progress percent={80} status="active" />
        <Row style={{marginBottom: "10px"}}/>
        <Collapse onChange={callback}>
          <Panel header="Client eligibility" key="1">
            <p>{text}</p>
          </Panel>
          <Panel header="Client approval pending supporting docs" key="2">
            <p>{text}</p>
          </Panel>
          <Panel header="Client pending matching with other tenant" key="3">
            <p>{text}</p>
          </Panel>
          <Panel header="Client flat approved pending allocation of unit" key="4">
            <p>{text}</p>
          </Panel>
          <Panel header="Client keys collection pending" key="5" disabled>
            <p>{text}</p>
          </Panel>
        </Collapse>
      </BCard>
      <Row style={{marginBottom: "20px"}}/>

      <BCard title="Counseling Sessions">
      <Table columns={columns} dataSource={data} />
      </BCard>
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

export default Clients;