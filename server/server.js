const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');

//create a database connection

mongoose.connect('mongodb+srv://mahadeadib45:hA1L0A4qhGYiA1dX@cluster1.hrdn6.mongodb.net/')
.then(()=> console.log("MongoDB connected"))
.catch((err) => console.log(err));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin: "http://localhost:5173/",
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization", "cache-control",
        "Expires", "Pragma",
        ]
    })
);

app.use(cookieParser());
app.use(express.json());

app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`));