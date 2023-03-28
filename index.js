const graphql = require("graphql");
const fs = require("fs");
const schema = require(process.argv[2]);

const clientSchema = graphql.buildClientSchema(schema.data);
const schemaString = graphql.printSchema(clientSchema);

fs.writeFileSync('schema-'+Date.now()+'.graphql',schemaString);