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

function testButton() {
    console.log('hhaa');
    var values = `{
        age: 56,
        allergies: "NA",
        birth_date: "1950-4-12",
        blood_type: "O+",
        clientID: 1,
        caseManagerID: 1,
        client_email: "clientB@gmail.com",
        contact_number: "98765432",
        disability: "NIL",
        emergency_contact_name: "Tom",
        emergency_contact_number: "99230234",
        emergency_relation: "Brother",
        employment_status: "Part-Time",
        income: 500,
        marital_status: "Divorced",
        name: "clientB",
        nationality: "Singaporean",
        previous_conviction: "NA",
        race: "Chinese",
        religion: "Christian",
        gender "Male"
    }`
    fetch("http://127.0.0.1:5002/add_client", {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: values
    })
}


function ClientRegistration(props) {
    const [form] = Form.useForm();
    
    const axios = require('axios');

    const submitForm = (values) => {
        values.caseManagerID = 1;
        values.birth_date = "2010-02-02";
        console.log(values);
        axios.post("http://127.0.0.1:5002/add_client", values);
    }

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
                
                    <Col span={16}>
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

                    <Col span={4} to="/client-registration">
                        <Button 
                            type="danger"
                            style={{
                                fontSize: "11px"
                            }}
                        >Cancel
                        </Button>
                    </Col>

                    <Col span={4}>
                        <Button 
                            onClick={testButton}
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

                    <Form {...layout} form={form} name="control-hooks" onFinish={submitForm}>
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
                            name="name"
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
                            name="client_email"
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
                            name="contact_number"
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
                            name="birth_date"
                            label="Birthday"
                            rules={[
                                {
                                    required: true
                                },
                            ]}
                        >
                            <DatePicker/>
                        </Form.Item>
                        
                        <Divider></Divider>

                        <Form.Item
                            name="marital_status"
                            label="Marital Status"
                            rules={[
                                {
                                    required: true
                                },
                            ]}
                        >
                            <Select>
                                <Option value="Single">Single</Option>
                                <Option value="Married">Married</Option>
                                <Option value="Seperated">Separated</Option>
                                <Option value="Divorced">Divorced</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            name="employment_status"
                            label="Employment Status"
                            rules={[
                                {
                                    required: true
                                },
                            ]}
                        >
                            <Select>
                                <Option value="Employed">Employed</Option>
                                <Option value="Unemployed">Unemployed</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            name="income"
                            label="Income"
                            rules={[
                                {
                                    required: true
                                },
                            ]}
                        >
                            <Input/>
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

                        <Divider></Divider>

                        <Form.Item
                            name="allergies"
                            label="Allergies"
                            rules={[
                                {
                                    required: true
                                },
                            ]}
                        >
                            <TextArea/>
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
                            <TextArea/>
                        </Form.Item>

                        <Form.Item
                            name="blood_type"
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
                            name="previous_conviction"
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
                            name="emergency_contact_name"
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
                            name="emergency_contact_number"
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
                            name="emergency_relation"
                            label="Relation"
                            rules={[
                                {
                                    required: true
                                },
                            ]}
                        >
                            <Input/>
                        </Form.Item>


                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </BCard>


                </Layout.Content>
            </Layout>
            <NavBar/>
        </div>
    );

}

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
};

const tailLayout = {
    wrapperCol: { span: 16 },
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