## RMLIOREGTC0004u

**Title**: MySQL: three tables, one primary key, one foreign key

**Description**: Test the translation of database type codes to IRIs

**Error expected?** No

**Input**
 [http://w3id.org/rml/resources/rml-io/RMLIOREGTC0004u/resource.sql](http://w3id.org/rml/resources/rml-io/RMLIOREGTC0004u/resource.sql)

**Mapping**
```
@prefix d2rq: <http://www.wiwiss.fu-berlin.de/suhl/bizer/D2RQ/0.1#> .
@prefix ex: <http://example.com/ns#> .
@prefix rml: <http://w3id.org/rml/> .

<http://example.com/base/TriplesMap1> a rml:TriplesMap;
  rml:logicalSource [ a rml:LogicalSource;
      rml:iterator """
      SELECT EMP.*, (CASE job
        WHEN 'CLERK' THEN 'general-office'
        WHEN 'NIGHTGUARD' THEN 'security'
        WHEN 'ENGINEER' THEN 'engineering'
      END) AS ROLE FROM EMP
    """;
      rml:source <http://example.com/base/#DB_source>;
      rml:referenceFormulation rml:SQL2008Query
    ];
  rml:predicateObjectMap [
      rml:objectMap [
          rml:template "http://data.example.com/roles/{ROLE}"
        ];
      rml:predicate ex:role
    ];
  rml:subjectMap [
      rml:template "http://data.example.com/employee/{empno}"
    ] .

<http://example.com/base/#DB_source> a d2rq:Database;
  d2rq:jdbcDSN "CONNECTIONDSN";
  d2rq:jdbcDriver "com.mysql.cj.jdbc.Driver";
  d2rq:password "";
  d2rq:username "root" .

```

**Output**
```
<http://data.example.com/employee/7369> <http://example.com/ns#role> <http://data.example.com/roles/general-office> .

```

