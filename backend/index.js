const express = require('express');
const cors = require('cors');

const headerToken = 'pasanaq-user-pq1';

const app = express();
app.use(cors());


app.listen(3000, () => {
    console.log('Server running on port 3000');
});


app.post("/payment", (req, res) => {
    const header = req.headers;
    const body = req.body;
    console.log(header.token);
    if (header.token != headerToken) {
        res.send({ message: "error" });
    }
    res.send({ message: "ok"});
});