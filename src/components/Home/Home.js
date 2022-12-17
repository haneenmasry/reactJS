import React, { useState, useEffect } from "react";
import { Button, Input, Modal, Space, Table } from 'antd';

function Home() {
 
//const initialValue = { id:"",name: "",username:"", email: "", website: "" }
const [id, setUserId] = useState('')
const [name, setName] = useState('')
const [username, setUserName] = useState('')
const [email, setEmail] = useState('')
const [website, setWebsite] = useState('')
const [dataSource, setDataSource] = useState([]);
const [isEditing, setIsEditing] = useState(false);
const [editingdata, setEditing] = useState(null);
const [open, setOpen] = useState(false);
const url ="https://jsonplaceholder.typicode.com/users";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "UserName",
    dataIndex: "username",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Website",
    dataIndex: "website",
  },
    {
      key: "5",
      title: "Actions",
      render: (record) => {
        return (
          <Space size="middle">
            <Button type='dashed' onClick={() => { onEdit(record);}}>Edit</Button>
            <Button type='primary'  danger onClick={() => {onDelete(record);}}>Delete</Button>
          </Space>
        );
      },
    },
];

useEffect(() => {
  fetch(url)
    .then(resp => resp.json())
    .then(resp => {
      setDataSource(resp)
    })
}, [])

   const onDelete = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this data record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((item) => item.id !== record.id);
        });
      },
    });
  };

  const onEdit = (record) => {
    setIsEditing(true);
    setEditing({ ...record });
  };
  
  const resetEditing = () => {
    setIsEditing(false);
    setEditing(null);
  };

  const showModal = () => {
    setOpen(true);
  };
  const handleOk = (e) => {
    setOpen(false);
  };
  const handleCancel = (e) => {
    setOpen(false);
  };

  const mySubmit = (e)=>{
    e.preventDefault();
    const mydata = {
        id ,
        name ,
        username ,
        email,
        website
    }
    console.log(mydata)

    setTimeout(() => {
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(mydata),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .then(() => {
            console.log('new post added');   
        });
    }, 2000);
   
}

return (
  <div className="App">
      <header className="App-header">
        <Button type='primary'  onClick={showModal} onSubmit={mySubmit}>Add a new Data</Button>
        <Table columns={columns} dataSource={dataSource}/>
        <Modal
          title="Add Data"
          okText="Add"
          open={open}
          onOk={handleOk}
          onCancel={handleCancel}
         >
           <Input
            value={id}
            onChange={(e) => setUserId(e.target.value)}
           
          />
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
           <Input
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </Modal>
        <Modal
          title="Edit Data"
          visible={isEditing}
          okText="Save"
          onCancel={() => {
            resetEditing();
          }}
          onOk={() => {
            setDataSource((pre) => {
              return pre.map((item) => {
                if (item.id === editingdata.id) {
                  return editingdata;
                } else {
                  return item;
                }
              });
            });
            resetEditing();
          }}
        >
          <Input
            value={editingdata?.name}
            onChange={(e) => {
              setEditing((pre) => {
                return { ...pre, name: e.target.value };
              });
            }}
          />
            <Input
            value={editingdata?.username}
            onChange={(e) => {
              setEditing((pre) => {
                return { ...pre, username: e.target.value };
              });
            }}
          />
          <Input
            value={editingdata?.email}
            onChange={(e) => {
              setEditing((pre) => {
                return { ...pre, email: e.target.value };
              });
            }}
          />
            <Input
            value={editingdata?.website}
            onChange={(e) => {
              setEditing((pre) => {
                return { ...pre, website: e.target.value };
              });
            }}
          />
        </Modal>
      </header>
    </div>
);
}

export default Home;