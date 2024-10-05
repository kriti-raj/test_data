const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
    const response = await axios.get("https://directory.cookieyes.com/api/v1/ip");
    console.log(response.data);
    res.send("Thank you for using my app");
    // res.json({
    //     msg: response.data
    // });
});

app.listen(9000, () => {
    console.log("Server is on");
});
