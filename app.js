import express from "express";
import cors from "cors";
import employeeRoutes from "./routes/employeeRoutes.js"
import db from "./database/db.js"
import {PORT} from "./config.js"

const app = express();

/*app.get("/", (req, res)=>{
    res.send("OK desde el servidor");
});*/

app.use(cors());
app.use(express.json());



app.use("/employees", employeeRoutes);


try {
    await db.authenticate();
    console.log("Conexion a la DB OK");
} catch (error) {
    console.log(error);
}

//const port = 8000;

app.listen(PORT, ()=>{
    console.log(`Servidor OK en el puerto ${PORT}`);
});