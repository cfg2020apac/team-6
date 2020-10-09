import React, { useState } from "react";

import NavBar from "../NavBar";
import { Layout, Col, Row, Typography, Collapse, Divider, Progress, Table, Tag, Comment, Form, Button, List, Input } from "antd";
import { BCard } from "../Styled";
import { FileTextOutlined, FilePdfOutlined, CalendarOutlined } from '@ant-design/icons';

import moment from 'moment';

const { Panel } = Collapse;
const { TextArea } = Input;
const Text = Typography.Text;

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`Current notes: ${comments.length} ${comments.length > 1 ? 'notes' : 'note'}`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        Add Notes
      </Button>
    </Form.Item>
  </>
);

function callback(key) {
  console.log(key);
}

function ClientPage(props) {
  const [state, setState] = useState({
    comments: [],
    submitting: false,
    value: '',
  });

  const handleSubmit = () => {
    if (state.value) {
      setState({
        ...state,
        value: state.value,
        submitting: true,
      });
    }

    

    setTimeout(() => {
      setState({
        submitting: false,
        value: '',
        comments: [
          {
            author: 'Me',
            content: <p>{state.value}</p>,
            datetime: moment().fromNow(),
          },
          ...state.comments,
        ],
      });
    }, 1000);
  };

  const handleChange = e => {
    setState({
      ...state,
      value: e.target.value,
    });
  };

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

  const { match } = props;

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
            {decodeURI(match.params.id)}
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
            <div style={{color:"blue"}}><FilePdfOutlined /> Attached documents</div>
          </Panel>
          <Panel header="Client readiness for work" key="2">
            <p>{text}</p>
            <div style={{color:"blue"}}><FilePdfOutlined /> Attached documents</div>
          </Panel>
          <Panel header="Job search strategy" key="3" disabled>
            <p>{text}</p>
            <div style={{color:"blue"}}><FilePdfOutlined /> Attached documents</div>
          </Panel>
          <Panel header="Interview in progress" key="4" disabled>
            <p>{text}</p>
            <div style={{color:"blue"}}><FilePdfOutlined /> Attached documents</div>
          </Panel>
          <Panel header="Placed in job" key="5" disabled>
            <p>{text}</p>
            <div style={{color:"blue"}}><FilePdfOutlined /> Attached documents</div>
          </Panel>
        </Collapse>
        <>
          <p style={{marginTop: "20px"}}></p>
          {state.comments.length > 0 && <CommentList comments={state.comments} />}              
            <Comment
              content={
                <Editor
                  onChange={handleChange}
                  onSubmit={handleSubmit}
                  submitting={state.submitting}
                  value={state.value}
                />
              }
            />
          </>
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
            <div style={{color:"blue"}}><FilePdfOutlined /> Attached documents</div>
          </Panel>
          <Panel header="Client approval pending supporting docs" key="2">
            <p>{text}</p>
            <div style={{color:"blue"}}><FilePdfOutlined /> Attached documents</div>
          </Panel>
          <Panel header="Client pending matching with other tenant" key="3">
            <p>{text}</p>
            <div style={{color:"blue"}}><FilePdfOutlined /> Attached documents</div>
          </Panel>
          <Panel header="Client flat approved pending allocation of unit" key="4">
            <p>{text}</p>
            <div style={{color:"blue"}}><FilePdfOutlined /> Attached documents</div>
          </Panel>
          <Panel header="Client keys collection pending" key="5" disabled>
            <p>{text}</p>
            <div style={{color:"blue"}}><FilePdfOutlined /> Attached documents</div>
          </Panel>
        </Collapse>
      </BCard>
      <Row style={{marginBottom: "20px"}}/>

      <BCard title="Counseling Sessions">
      <Table 
        columns={columns} 
        dataSource={data} 
        pagination={false}
      />
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

export default ClientPage;