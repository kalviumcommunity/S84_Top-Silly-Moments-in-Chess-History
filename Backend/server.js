const express = require("express");
const cors = require('cors');
const connectToDb = require("./database/db");
const Moment = require('./routes/routes');
const app = express();
const sqlRoute = require('./routes/sql_routes')

app.use(express.json());
app.use(cors({
    origin: "https://top-silly-moment-in-chess.netlify.app",
    credentials: true
}));

require('dotenv').config();

const Port = process.env.PORT || 6900;
const db_url = process.env.DB_URL;

app.get("/", (req, res) => {
    res.send("<h2> My name is Avinash. I am from squad-84 </h2>")
})

app.get('/ping', (req, res) => {
    res.send("<h1> I am currently inside ping destination! </h1>")
})

app.use('/api', Moment);
app.use('/sql', sqlRoute);

app.listen(Port, async() => {
    try{
        await connectToDb(db_url);
        console.log(`Server is running on port http://localhost:${Port}`);
        console.log(`Successfull connected to database`)
    }
    catch(err){
        console.log(err)
    }
})