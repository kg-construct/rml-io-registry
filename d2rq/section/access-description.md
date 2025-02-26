# Access description

RML leverages `d2rq:Database` for defining how a SQL database can be accessed in a RML Logical Source's `rml:source`.
RML only uses the following properties of a `d2rq:Database`:

- `d2rq:jdbcDSN`: The JDBC database URL. This is a string of the form `jdbc:subprotocol:subname`. For a MySQL database, this is something like `jdbc:mysql://hostname:port/dbname`.
- `d2rq:jdbcDriver`: The JDBC driver class name for the database. Used together with `d2rq:jdbcDSN`. Example: `com.mysql.jdbc.Driver` for MySQL.
- `d2rq:username`: A username if required by the database.
- `d2rq:password`: A password if required by the database.

Example of a D2RQ Database in a RML mapping:

```
<LogicalSource> a rml:LogicalSource;
  rml:source [ a rml:Source, d2rq:Database;
    d2rq:jdbcDSN "jdbc:mysql://localhost/iswc";
    d2rq:jdbcDriver "com.mysql.jdbc.Driver";
    d2rq:username "user";
    d2rq:password "password";
  ];
.
```
