const express = require('express');

const PORT = 5000;

const app = express();

app.get('/', (res, req) => {
	res.send('Hello world');
});

app.get('/render', (res, req) => {
	res.send('Just trying out render');
});

app.listen(PORT, () => {
	console.log(`App is listening on ${PORT}`);
});
