## RMLIOREGTC0004j

**Title**: MySQL: Two columns mapping, duplicate column name in SELECT

**Description**: Tests the presence of duplicate column names in the SELECT list of the SQL query

**Error expected?** Yes

**Input**
 [http://w3id.org/rml/resources/rml-io/RMLIOREGTC0004j/resource.sql](http://w3id.org/rml/resources/rml-io/RMLIOREGTC0004j/resource.sql)

**Mapping**
```
@prefix d2rq: <http://www.wiwiss.fu-berlin.de/suhl/bizer/D2RQ/0.1#> .
@prefix ex: <http://example.com/> .
@prefix rml: <http://w3id.org/rml/> .

<http://example.com/base/TriplesMap1> a rml:TriplesMap;
  rml:logicalSource [
      rml:iterator "SELECT Name, Name FROM student";
      rml:referenceFormulation rml:SQL2008Query;
      rml:source <http://example.com/base/#DB_source>
    ];
  rml:predicateObjectMap [
      rml:objectMap [
          rml:reference "IDs"
        ];
      rml:predicate ex:id
    ];
  rml:subjectMap [
      rml:template "http://example.com/{ID}/{Name}"
    ] .

<http://example.com/base/#DB_source> a d2rq:Database;
  d2rq:jdbcDSN "CONNECTIONDSN";
  d2rq:jdbcDriver "com.mysql.cj.jdbc.Driver";
  d2rq:password "";
  d2rq:username "root" .

```

