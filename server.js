const express = require('express');
const { alignPropType } = require('react-bootstrap/esm/DropdownMenu');

const app = express();

app.get('/api/customers' , (req, res) => {
    const customers = [
        { id: 1, firstname: 'john', lastname: 'doe'},
        { id: 2, firstname: 'chris', lastname: 'doe'},
        { id: 3, firstname: 'john', lastname: 'chris'},
    ];

    res.json(customers)
});

const port= 5000;

app.listen(port, () => console.log('server started on port ${port}'));