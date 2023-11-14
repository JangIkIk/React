import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { DataType } from "./App";

interface CreateListType{
    setList: React.Dispatch<React.SetStateAction<DataType[]>>
}

const CreateList = ( {setList} : CreateListType)=>{
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");

    const post_List = async ()=>{
        try{
            const newDataId = await axios.post(`http://${process.env.REACT_APP_API_KEY}/list`, {title, content});
            setList( prev => [
                ...prev,{id: newDataId.data[0].id, title,content}
            ])
            setTitle("");
            setContent("");
        } catch(error){
            console.error(error);
        }
    }

    return(
        <AddListLayout>
            <label htmlFor="title">
                <span>제목</span>
                <input id="title" type="text" value={title} onChange={({target})=> setTitle(target.value)}/>
            </label>
            <label htmlFor="content">
                <span>내용</span>
                <input id="content" type="text" value={content} onChange={({target})=>setContent(target.value)}/>
            </label>
            <button onClick={post_List} >작성하기</button>
        </AddListLayout>
    );
}

export default CreateList;

const AddListLayout = styled.div`
    // background-color: yellow;
    display: flex;
    flex-direction: column;
    padding: 10px;
`
