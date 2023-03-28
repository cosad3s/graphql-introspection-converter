# GraphQL Introspection Converter

Simple converter for GraphQL introspection JSON to schema (SDL).

## Configuration

```bash
npm install
```

## Usage

```bash
node index.js /path/to/introspection.json
```

The generated SDL schema will be generated in current folder under a name like `schema-*.graphql`.

## Credits

Thanks to:

- [https://github.com/graphql/graphql-js](https://github.com/graphql/graphql-js).
- [https://github.com/mstachniuk/graphql-schema-from-introspection-generator](https://github.com/mstachniuk/graphql-schema-from-introspection-generator)

## Tips

**Generate queries, mutations ... from schema:**

With [gql-generator](https://github.com/timqian/gql-generator):

```bash
gqlg --schemaFilePath ./schema-1680004349192.graphql --destDirPath ./output/
```

**Introspection query:**

```js
{__schema{queryType{name}mutationType{name}subscriptionType{name}types{...FullType}directives{name description locations args{...InputValue}}}}fragment FullType on __Type{kind name description fields(includeDeprecated:true){name description args{...InputValue}type{...TypeRef}isDeprecated deprecationReason}inputFields{...InputValue}interfaces{...TypeRef}enumValues(includeDeprecated:true){name description isDeprecated deprecationReason}possibleTypes{...TypeRef}}fragment InputValue on __InputValue{name description type{...TypeRef}defaultValue}fragment TypeRef on __Type{kind name ofType{kind name ofType{kind name ofType{kind name ofType{kind name ofType{kind name ofType{kind name ofType{kind name}}}}}}}}
```
