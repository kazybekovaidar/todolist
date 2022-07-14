import React from 'react'
import { Layout, Card } from 'antd';
import { useState } from "react"
import Tasks from './Tasks';
import AddTask from './AddTask';
import './components.css';
const { Content } = Layout;
const MainPage = () => {
  const [tasks, setTasks] = useState('')

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1

    const newTask = {id, ...task}
    
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => { 
    setTasks(tasks.filter((task) => task.id !==id))
  }

  return (
    <Layout className="site-layout">
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 715,
          }}
        >
            <Card title="To Do" bordered={false} style={{ minWidth: 1200 }}>
              <AddTask onAdd={addTask}/>
            </Card>
          <div>
            <Card
              style={{ marginTop: 32 }}
              type="inner"
            >
              {
                tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask}/>)
                : ("There is nothing to do")
              }
            </Card>
          </div>
        </Content>
      </Layout>
  )
}

export default MainPage