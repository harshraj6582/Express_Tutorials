//
const express = require("express");
const app = express();

//import router module from route.js file
const userRoutes = require("./route");

app.use("/", userRoutes);

//PORT
const port = process.env.PORT || 8000;

//Starting a server
app.listen(port, () => {
console.log(`app is running at ${port}`);
});
