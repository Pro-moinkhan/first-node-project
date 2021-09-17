const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('I Know how to run node.'));

app.listen(4000, () => console.log('Listening to prot 4000'));