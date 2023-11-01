import axios from "axios";
import { ListType } from "./List";

interface DeleteListType extends ListType {
    deleteId: number;    
}

export const DeleteList = ( {deleteId, list, listSet} : DeleteListType) => {

    const delete_List = ()=>{
        try{
            axios.delete(`http://${process.env.REACT_APP_API_KEY}/list/${deleteId}`);
            const newList = list.filter( (item) => item.id !== deleteId);
            listSet(newList);
        }catch(error){
            console.error(error);
        }
    }
    return(
        <button onClick={delete_List}>삭제</button>
    );
}