const express = require("express")
const cors = require("cors")


const port = 3000;
const app = express();
app.use(cors("*"))

app.get("/",(req,res)=>{

return res.json({users:["John","Doe"]})
})

app.listen(port,()=> console.log("Server is running on port:",port))
