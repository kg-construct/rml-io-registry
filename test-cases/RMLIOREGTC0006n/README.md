## RMLIOREGTC0006n

**Title**: SQLServer: Three columns mapping, concatenation of columns, by using a rml:SQL2008Query to produce literal

**Description**: Tests: (1) three column mapping; and (2) concatenation of columns to produce literal, by using a rml:SQL2008Query

**Error expected?** No

**Input**
 [http://w3id.org/rml/resources/rml-io/RMLIOREGTC0006n/Friends.json](http://w3id.org/rml/resources/rml-io/RMLIOREGTC0006n/Friends.json)

**Mapping**
```
@prefix d2rq: <http://www.wiwiss.fu-berlin.de/suhl/bizer/D2RQ/0.1#> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .
@prefix rml: <http://w3id.org/rml/> .

<http://example.com/base/TriplesMap1> a rml:TriplesMap;
  rml:logicalSource [
      rml:iterator "SELECT ID, LastName, concat_ws(FirstName, '', LastName) as Name FROM student";
      rml:referenceFormulation rml:SQL2008Query;
      rml:source <http://example.com/base/#DB_source>
    ];
  rml:predicateObjectMap [
      rml:objectMap [
          rml:reference "Name";
          rml:termType rml:Literal
        ];
      rml:predicate foaf:name
    ];
  rml:subjectMap [
      rml:template "http://example.com/{ID}/{LastName}"
    ] .

<http://example.com/base/#DB_source> a d2rq:Database;
  d2rq:jdbcDSN "CONNECTIONDSN";
  d2rq:jdbcDriver "com.microsoft.sqlserver.jdbc.SQLServerDriver";
  d2rq:password "YourSTRONG!Passw0rd;";
  d2rq:username "sa" .

```

**Output**
```
<http://example.com/10/Williams> <http://xmlns.com/foaf/0.1/name> "VenusWilliams" .
```

