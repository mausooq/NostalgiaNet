import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';

import postsRouter from './routers/posts.js' ;

const app = express();
app.use(bodyParser.json({limit:"50mb",extended:true})); // parse requests of content-type
app.use(bodyParser.urlencoded({limit:"50mb",extended:true}))
app.use(cors());
app.use('/posts',postsRouter)

const CONNECTION_URL = "mongodb+srv://abdulmausooq:8080@fuegocluster.c8hjaqp.mongodb.net/";

const PORT = process.env.PORT || 8080;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(
    () => app.listen(PORT,console.log('server is running on '+PORT))
    ).catch((error) => console.log(error.message) )

