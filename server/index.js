const express = require('express');
let app = express();

app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));

let port = 3000;
app.listen(port, () => console.log(`listening on port ${port}`));