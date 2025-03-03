## RMLIOREGTC0005p

**Title**: PostgreSQL: Unnamed column in a logical table

**Description**: Test a logical table with unnamed column.

**Error expected?** No

**Input**
 [http://w3id.org/rml/resources/rml-io/RMLIOREGTC0005p/Friends.json](http://w3id.org/rml/resources/rml-io/RMLIOREGTC0005p/Friends.json)

**Mapping**
```
@prefix d2rq: <http://www.wiwiss.fu-berlin.de/suhl/bizer/D2RQ/0.1#> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .
@prefix rml: <http://w3id.org/rml/> .

<http://example.com/base/TriplesMap1> a rml:TriplesMap;
  rml:logicalSource [ a rml:LogicalSource;
      rml:iterator """
        SELECT Name, COUNT(Sport)
        FROM Student
        GROUP BY Name
        """;
      rml:source <http://example.com/base/#DB_source>;
      rml:referenceFormulation rml:SQL2008Query
    ];
  rml:predicateObjectMap [
      rml:objectMap [
          rml:reference "name"
        ];
      rml:predicate foaf:name
    ];
  rml:subjectMap [
      rml:template "http://example.com/resource/student_{name}"
    ] .

<http://example.com/base/#DB_source> a d2rq:Database;
  d2rq:jdbcDSN "CONNECTIONDSN";
  d2rq:jdbcDriver "org.postgresql.Driver";
  d2rq:password "";
  d2rq:username "postgres" .

```

**Output**
```
<http://example.com/resource/student_Venus%20Williams> <http://xmlns.com/foaf/0.1/name> "Venus Williams" . 
<http://example.com/resource/student_Demi%20Moore> <http://xmlns.com/foaf/0.1/name> "Demi Moore" . 



```

