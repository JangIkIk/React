import { useEffect, useState } from 'react';
import styled from 'styled-components';
import CreateList from "./CreateList"
import List from "./List";
import axios from 'axios';

export interface DataType {
  id: number;
  title: string;
  content: string;
}


function App() {
  const [data, setData] = useState<DataType[]>([]); 

  useEffect(()=>{
    axios.get(`http://${process.env.REACT_APP_API_KEY}`)
    .then( res => setData(res.data))
    .catch( (err) => console.error(err));

    fetch("http://localhost:4000/users/location-registration", {"method":"DELETE"})
  },[])

  return (
      <AppLayOut>
        <h1>Todo List</h1>
        <CreateList setList={setData} />
        <List list={data} listSet={setData} />
      </AppLayOut>
  );
}

export default App;

const AppLayOut = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color:gray; 
  padding: 10px;
  min-height: 100%;
`


