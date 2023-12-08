import styled from "styled-components";
import { DataType } from "./App";
import { UpdateList } from "./UpdateList";
import { DeleteList } from "./DeleteList";
import { useState } from "react";

export interface ListType {
  list: DataType[];
  listSet: React.Dispatch<React.SetStateAction<DataType[]>>;
}

const List = ({ list, listSet }: ListType) => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [modify, setModify] = useState<number | null>(null);

  const list_DataSave = (id: number, title: string, content: string) => {
    setModify(id);
    setTitle(title);
    setContent(content);
  };

  return (
    <ListLayOut>
      <ul>
        {list &&
          list.map((value, idx) => {
            return (
              <li key={idx}>
                <div>
                  {modify === value.id ? (
                    <input
                      value={title}
                      onChange={({ target }) => setTitle(target.value)}
                    />
                  ) : (
                    <span className="title-font">{value.title}</span>
                  )}
                  <br />
                  {modify === value.id ? (
                    <input
                      value={content}
                      onChange={({ target }) => setContent(target.value)}
                    />
                  ) : (
                    <span className="content-font">{value.content}</span>
                  )}
                </div>
                {modify === value.id ? (
                  <UpdateList
                    listSet={listSet}
                    setModify={setModify}
                    listId={value.id}
                    title={title}
                    content={content}
                  />
                ) : (
                  <button
                    onClick={() =>
                      list_DataSave(value.id, value.title, value.content)
                    }
                  >
                    수정
                  </button>
                )}
                {modify === value.id ? null : (
                  <DeleteList
                    deleteId={value.id}
                    list={list}
                    listSet={listSet}
                  />
                )}
              </li>
            );
          })}
      </ul>
    </ListLayOut>
  );
};

export default List;

const ListLayOut = styled.div`
  padding: 10px;

  & > ul {
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    & > li {
      text-align: center;
      width: 100%;
      border: 1px solid black;
    }
  }

  .title-font {
    font-size: 13px;
  }

  .content-font {
    font-size: 10px;
    color: yellow;
  }
`;
