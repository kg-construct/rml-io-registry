## RMLIOREGTC0006d

**Title**: SQLServer table invalid

**Description**: Handle invalid table for SQLServer

**Error expected?** Yes

**Input**
 [http://w3id.org/rml/resources/rml-io/RMLIOREGTC0006d/Friends.json](http://w3id.org/rml/resources/rml-io/RMLIOREGTC0006d/Friends.json)

**Mapping**
```
@prefix d2rq: <http://www.wiwiss.fu-berlin.de/suhl/bizer/D2RQ/0.1#> .
@prefix ex: <http://example.com/> .
@prefix rml: <http://w3id.org/rml/> .

<http://example.com/base/TriplesMap1> a rml:TriplesMap;
  rml:logicalSource [
      rml:source <http://example.com/base/#DB_source>;
      rml:referenceFormulation rml:SQL2008Table;
      rml:iterator "Person"
    ];
  rml:predicateObjectMap [
      rml:objectMap [
          rml:reference "DateOfBirth"
        ];
      rml:predicate ex:BirthDay
    ];
  rml:subjectMap [
      rml:template "http://example.com/Person/{ID}/{Name}/{DateOfBirth}"
    ] .

<http://example.com/base/#DB_source> a d2rq:Database;
  d2rq:jdbcDSN "CONNECTIONDSN";
  d2rq:jdbcDriver "com.microsoft.sqlserver.jdbc.SQLServerDriver";
  d2rq:password "YourSTRONG!Passw0rd;";
  d2rq:username "sa" .

```

