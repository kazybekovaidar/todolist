import { Checkbox, Button } from 'antd';
import React from 'react';
import {DeleteOutlined} from '@ant-design/icons';
import { Col, Row } from 'antd';

const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

const Task = ({task, onDelete}) => {
  return (
    <Row>
      <Col span={23}>
        <Checkbox onChange={onChange} style={{marginLeft:'5px'}}><h3>{task.text}</h3></Checkbox>
      </Col>
      <Col>
        <Button icon={<DeleteOutlined />} onClick={() => onDelete(task.id)} type="link" className='del'></Button>
      </Col>
    </Row>
  )
}

export default Task
