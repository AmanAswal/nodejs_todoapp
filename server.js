import {app} from "./app.js"
import { connectDatabase } from "./data/database.js";

// connect database
connectDatabase();

app.listen(process.env.PORT, (req, res)=>{
    console.log(`Server is listening on port:${process.env.PORT} in ${process.env.NODE_ENV} mode!`);
}); 