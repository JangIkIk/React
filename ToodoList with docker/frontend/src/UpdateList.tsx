import axios from "axios";
import { DataType } from "./App";

type UpdateListType = {
    setModify: React.Dispatch<React.SetStateAction<number | null>>;
    listId: number;
    title: string;
    content: string;
    listSet: React.Dispatch<React.SetStateAction<DataType[]>>;
}

export const UpdateList = ({ setModify, listId, title, content, listSet} : UpdateListType) =>{

    const update_List = async ()=>{

        try{
            await axios.patch(`http://${process.env.REACT_APP_API_KEY}/list`,{listId,title,content})
            setModify(null);
            listSet(prev => {
                return prev.map(item => {
                    if (item.id === listId) {
                        return { ...item, title, content };
                    }
                    return item;
                });
            });

        }catch(error){
            console.error(error)
        }
    }

    return(
        <>
        <button onClick={update_List}>저장</button>
        <button onClick={()=>setModify(null)}>취소</button>
        </>
    );
}

