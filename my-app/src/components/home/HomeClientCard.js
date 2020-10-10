import React from "react";

import { Layout, Col, Row, Typography, Collapse, Progress, Table, Tag, Space } from "antd";
import { BCard } from "../Styled";
import { FileTextOutlined, CheckSquareOutlined, UserAddOutlined } from '@ant-design/icons';
import Avatar from 'antd/lib/avatar/avatar';
import { requirePropFactory } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const { Panel } = Collapse;
const Text = Typography.Text;

function HomeClientCard(props) {
    const columns = [
        {
            dataIndex: "processType",
            key: "processType",
            render: text => <b>{text}</b>
        },
        {
            dataIndex: "processStatus",
            key: "processStatus"
        }
    ]

    const data = [
        {
            key: "1",
            processType: "Employment",
            processStatus: props.employmentStatus
        },
        {
            key: "2",
            processType: "Housing",
            processStatus: props.housingStatus
        },
        {
            key: "3",
            processType: "Counselling",
            processStatus: props.counsellingStatus
        }
    ]

    const history = useHistory();
    
    return (
        <div onClick={() => {
            history.push(`/client/${props.clientID}`);
        }}>
            <BCard>
                
                <Row
                    type="flex"
                    justify="space-between"
                >
                    <Col span={1}>
                        <Avatar 
                            size={64} src={props.clientImage}
                        />
                    </Col>

                    <Col 
                        span={16}
                        style={{
                            diplay: "flex",
                            alignItems: "center"
                        }}
                    >
                        <Text
                            style={{
                                
                                fontSize: "20px",
                                fontWeight: "300",
                                lineHeight: "26px"
                            }}
                        >
                            {props.clientName}
                        </Text> 
                    </Col>
                </Row>

                <Table 
                    style={{
                        fontSize: "10px",
                    }}
                    columns={columns}
                    dataSource={data}
                    pagination={false}
                    showHeader={false}
                />

            </BCard>
            <Row style={{marginBottom: "20px"}}/>
        </div>
    );
}

function URLify(string) {
    return string.trim().replace(/\s/g, '%20');
  }

export default HomeClientCard;