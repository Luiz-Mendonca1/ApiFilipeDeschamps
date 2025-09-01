const http = require('http');

// porta do servidor
const port = 3000;


const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello, world!');
        const users = [
            { name: 'Alice', age: 30 },
            { name: 'Bob', age: 25 },
            { name: 'Charlie', age: 35 },
        ];
        res.write(users.map(user => `<li>${user.name} - ${user.age} years old</li>`).join(''));

        res.end();
    } else if (req.url === '/about') {
        res.write('This is the about page.');
        res.end();
    } else {
        res.write('Page not found.');
        res.end();
    }
});

server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});