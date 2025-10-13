## RMLIOREGTC0005g

**Title**: PostgreSQL: Two columns mapping, an undefined rml:path

**Description**: Tests the presence of an undefined rml:path

**Error expected?** Yes

**Input**
 [http://w3id.org/rml/resources/rml-io/RMLIOREGTC0005g/resource.sql](http://w3id.org/rml/resources/rml-io/RMLIOREGTC0005g/resource.sql)

**Mapping**
```
@prefix d2rq: <http://www.wiwiss.fu-berlin.de/suhl/bizer/D2RQ/0.1#> .
@prefix ex: <http://example.com/> .
@prefix rml: <http://w3id.org/rml/> .

<http://example.com/base/TriplesMap1> a rml:TriplesMap;
  rml:logicalSource [
      rml:referenceFormulation rml:SQL2008Table;
      rml:source <http://example.com/base/#DB_source>;
      rml:iterator "\"Students\""
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
  d2rq:jdbcDriver "org.postgresql.Driver";
  d2rq:password "";
  d2rq:username "postgres" .

```

