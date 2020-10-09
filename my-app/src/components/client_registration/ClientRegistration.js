import React from "react";

import NavBar from "../NavBar";
import { Layout, Col, Row, Typography, Collapse, Button, Divider, Form, Input, Select } from "antd";
import { DatePicker, Space } from "antd";
import { BCard } from "../Styled";
import { FileTextOutlined, UserOutlined, UserAddOutlined } from '@ant-design/icons';
import Avatar from 'antd/lib/avatar/avatar';
import { requirePropFactory } from '@material-ui/core';

const { Panel } = Collapse;
const Text = Typography.Text;
const { Option } = Select;
const { TextArea } = Input;

function ClientRegistration(props) {
    const [form] = Form.useForm();
    
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
                
                    <Col span={12}>
                    <Text
                        style={{
                        color: "#FFF",
                        fontSize: "24px",
                        fontWeight: "300",
                        lineHeight: "26px"
                        }}
                    >
                        Add a Client
                    </Text>
                    </Col>

                    <Col span={6} to="/client-registration">
                        <Button 
                            type="danger"
                            style={{
                                fontSize: "11px"
                            }}
                        >Cancel
                        </Button>
                    </Col>

                    <Col span={6}>
                        <Button 
                            style={{
                                fontSize: "11px"
                            }}
                        >Submit
                        </Button>
                    </Col>
                </Row>  
                
                <BCard>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            alignItems: "center"
                        }}
                    >
                        <Avatar 
                            size={64} 
                            icon={<UserOutlined/>}
                            style={{
                                marginBottom: "20px"
                            }}
                        ></Avatar>    
                        <Button 
                            type="primary"
                        >
                            Add Picture
                        </Button>
                    </div> 

                    <Divider></Divider>

                    <Form {...layout} form={form} name="control-hooks" onFinish={submitForm()}>
                        <Text
                            style={{
                                fontSize: "20px"
                            }}
                        >Basic Information</Text>
                        <Row
                            style={{
                                marginBottom: "20px"
                            }}
                        ></Row>

                        <Form.Item
                            name="fullName"
                            label="Full Name"
                            rules={[
                                {
                                    required: true
                                },
                            ]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            name="emailAddress"
                            label="Email Address"
                            rules={[
                                {
                                    required: true
                                },
                            ]}
                        >
                            <Input/>
                        </Form.Item>
                        
                        <Form.Item
                            name="phoneNumber"
                            label="Phone Number"
                            rules={[
                                {
                                    required: true
                                },
                            ]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            name="age"
                            label="Age"
                            rules={[
                                {
                                    required: true
                                },
                            ]}
                        >
                            <Input
                                style={{
                                    width: "50px"
                                }}
                            />
                        </Form.Item>

                        <Form.Item
                            name="gender"
                            label="Gender"
                            rules={[
                                {
                                    required: true
                                },
                            ]}
                        >
                            <Select
                                style={{
                                    width: "180px"
                                }}
                            >
                                <Option value="Male">Male</Option>
                                <Option value="Female">Female</Option>
                                <Option value="Other">Other/Prefer Not to Say</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            name="birthday"
                            label="Birthday"
                            rules={[
                                {
                                    required: true
                                },
                            ]}
                        >
                            <Space direction="vertical">
                                <DatePicker/>
                            </Space>,
                        </Form.Item>
                        
                        <Divider></Divider>

                        <Form.Item
                            name="nationality"
                            label="Nationality"
                            rules={[
                                {
                                    required: true
                                },
                            ]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            name="race"
                            label="Race"
                            rules={[
                                {
                                    required: true
                                },
                            ]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            name="religion"
                            label="Religion"
                            rules={[
                                {
                                    required: true
                                },
                            ]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            name="allergies"
                            label="Allergies"
                            rules={[
                                {
                                    required: true
                                },
                            ]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            name="disability"
                            label="Disability"
                            rules={[
                                {
                                    required: true
                                },
                            ]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            name="bloodType"
                            label="Blood Type"
                            rules={[
                                {
                                    required: true
                                },
                            ]}
                        >
                            <Select
                                style={{
                                    width: "60px"
                                }}
                            >
                                <Option value="O-">O-</Option>
                                <Option value="O+">O+</Option>
                                <Option value="B-">B-</Option>
                                <Option value="B+">B+</Option>
                                <Option value="A-">A-</Option>
                                <Option value="A+">A+</Option>
                                <Option value="AB-">AB-</Option>
                                <Option value="AB+">AB+</Option>
                            </Select>
                        </Form.Item>

                        

                        <Form.Item
                            name="previousConvictions"
                            label="Previous Convictions"
                            rules={[
                                {
                                    required: true
                                },
                            ]}
                        >
                            <TextArea/>
                        </Form.Item>

                        <Divider></Divider>

                        <Text
                            style={{
                                fontSize: "20px"
                            }}
                        >Emergency Contact</Text>
                        <Row
                            style={{
                                marginBottom: "20px"
                            }}
                        ></Row>

                        <Form.Item
                            name="emergencyContactFullName"
                            label="Full Name"
                            rules={[
                                {
                                    required: true
                                },
                            ]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            name="emergencyContactPhoneNumber"
                            label="Phone Number"
                            rules={[
                                {
                                    required: true
                                },
                            ]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            name="emergencyContactRelation"
                            label="Relation"
                            rules={[
                                {
                                    required: true
                                },
                            ]}
                        >
                            <Input/>
                        </Form.Item>

                    </Form>
                </BCard>


                </Layout.Content>
            </Layout>
            <NavBar/>
        </div>
    );

}

function submitForm() {

}

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 4 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

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