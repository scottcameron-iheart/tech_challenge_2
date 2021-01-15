var { graphql, buildSchema } = require('graphql');

// Constructs a schema, using Graphql schema language
var schema = buildSchema(`
    type Query {
        hello: String
    }
`);


// The root provides a resolver function for each API endpoint
var root = {
    hello: () => {
        return 'hello world!';
    },
};

// Run the GraphQL query '{hello}' and prin out the response
graphql(schema, '{hello}' , root).then((response) => {
    console.log(response);
});