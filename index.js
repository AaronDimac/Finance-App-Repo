const fs = require('fs');
const path = require('path');

exports.handler = async (event) => {
    if (event.path === '/' && event.httpMethod === 'GET') {
        const html = fs.readFileSync(path.join(__dirname, 'finance-app.html'), 'utf8');
        return {
            statusCode: 200,
            headers: { 'Content-Type': 'text/html' },
            body: html
        };
    }
    return { statusCode: 404, body: 'Not Found' };
};
