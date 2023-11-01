import express, {Request, Response, NextFunction} from "express";
import mysql from "mysql2/promise";
import dotenv from "dotenv";
import cors from "cors";
const app = express();
const port: number = parseInt(process.env.API_PORT || "4000");
app.use(cors())
app.use(express.json())
dotenv.config();

// mysql 서버연결
const connection: Promise<mysql.Connection> = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "testpasswd",
    database: "test"
});

// mysql db연결 및 간단쿼리문 함수
const connectionData = async (query: string) => {
    const db:mysql.Connection = await connection;
    const [rows, packet] = await db.execute(query);
    return rows;
}


app.get('/', async (req: Request, res: Response, next:NextFunction)=>{

    try{
        res.status(200).json(await connectionData("SELECT * FROM list"));
    }catch(error){
        res.status(500).json({error: "list테이블 GET요청 오류"})
    }
})

app.post('/list', async (req: Request, res:Response)=>{
    try{
        const {title, content} = req.body;
        const db = await connection
        await db.execute(`INSERT INTO list(title, content) VALUES (?,?)`, [title, content]);
        const [id, fields] = await db.execute('SELECT LAST_INSERT_ID() as id');
        res.status(200).json(id);

        // insertId에 접근이 불가능함/ 클라이언트에서는 가능함 이유는 ? 
        // res.json(result);
    }catch(error){
        res.status(500).json({error: "list 테이블 POST요청 오류"});
    }
})

app.delete('/list/:id', async (req: Request, res:Response) =>{
    try{
        const listId = req.params.id;
        await connectionData(`DELETE FROM list WHERE id = ${listId}`);
        res.status(200).json("삭제완료");

    }catch(error){
        res.status(500).json({error: "list 테이블 DELETE 요청 오류"});
    }
})

app.patch('/list', async (req: Request, res:Response) => {

    try{
        const {listId, title, content} = req.body;
        const db = await connection;
        await db.execute("UPDATE list SET title = ?, content = ? WHERE id = ?", [title, content, listId]);
        res.status(200).json("수정완료");
    }catch(error){
        res.status(500).json({error: "list 테이블 PATCH 요청 오류"})
    }

})

app.listen(port, ()=>{
    console.log(`server open PORT: ${port}`)
})
