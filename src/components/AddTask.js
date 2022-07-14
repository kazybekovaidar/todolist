import { useState } from "react";
import {Input, Form, message} from "antd"
import {PlusCircleOutlined} from '@ant-design/icons';

const AddTask = ({onAdd}) => {
  const [text, setText] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if(!text) {
      message.error('Please add a task!');
    } else {
      onAdd({text})
    }

    setText('')
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <Form.Item className="form-control">
        <Input
          type='text' 
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Input type='submit' prefix={<PlusCircleOutlined/>} value='Add'/>
      </Form.Item>
    </form>
  );
};

export default AddTask;