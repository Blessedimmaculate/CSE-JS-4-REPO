//1 import dependencies
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

//2 import configurations
const { mongoUri, PORT } = require("./config");


//3 create a webserver application instatnce using the express library
const app = express();


//4 create a database connection using the mongoose library
mongoose.connect(mongoUri, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
});

mongoose.connection
  .once("open", () => {
    console.log("Mongoose connection open");
  })
  .on("error", (err) => {
    console.error(`Connection error: ${err.message}`);
  });

  
//5 set middlewares for the application
app.use(cors())//cors used when frontend(vue) is communicating with backend
app.use(morgan('tiny'))
app.use(express.json());

//6 import routes
const studentRoutes = require("./routes/studentRoutes");


app.get("/", (req, res) => {
  res.send("server is running successfully...");
});

//7 set entry points for the REST routes created for the different collections
app.use("/students", studentRoutes);



// // 8. Prepare for Production
// if(process.env.NODE_ENV === 'production'){
//   app.use(express.static('views/dist'))
//   app.get('*', (req, res)=>{
//       res.sendFile(path.resolve(__dirname, 'views', 'dist', 'index.html'))
//   })
// }
// app.get("/", (req, res) => {
//   res.send("server is running successfully...");
// });




app.get("*", (req, res) => {
  res.send("error, page not found");
});

//9 configure the web server application to listen to requests
app.listen(PORT, () => console.log(`server running on port ${PORT}`));


