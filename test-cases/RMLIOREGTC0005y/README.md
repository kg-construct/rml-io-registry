## RMLIOREGTC0005y

**Title**: PostgreSQL: Table with datatypes, boolean conversions

**Description**: Tests the rml:termType and datatype conversions: boolean

**Error expected?** No

**Input**
 [http://w3id.org/rml/resources/rml-io/RMLIOREGTC0005y/Friends.json](http://w3id.org/rml/resources/rml-io/RMLIOREGTC0005y/Friends.json)

**Mapping**
```
@prefix d2rq: <http://www.wiwiss.fu-berlin.de/suhl/bizer/D2RQ/0.1#> .
@prefix ex: <http://example.com/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rml: <http://w3id.org/rml/> .

<http://example.com/base/TriplesMap1> a rml:TriplesMap;
  rml:logicalSource [
      rml:source <http://example.com/base/#DB_source>;
      rml:referenceFormulation rml:SQL2008Table;
      rml:iterator "Patient"
    ];
  rml:predicateObjectMap [
      rml:object foaf:Person;
      rml:predicate rdf:type
    ], [
      rml:objectMap [
          rml:reference "paidinadvance"
        ];
      rml:predicate ex:paid
    ];
  rml:subjectMap [
      rml:template "http://example.com/Patient{id}"
    ] .

<http://example.com/base/#DB_source> a d2rq:Database;
  d2rq:jdbcDSN "CONNECTIONDSN";
  d2rq:jdbcDriver "org.postgresql.Driver";
  d2rq:password "";
  d2rq:username "postgres" .

```

**Output**
```
<http://example.com/Patient10> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://xmlns.com/foaf/0.1/Person> .
<http://example.com/Patient10> <http://example.com/paid> "false"^^<http://www.w3.org/2001/XMLSchema#boolean> .
<http://example.com/Patient11> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://xmlns.com/foaf/0.1/Person> .
<http://example.com/Patient11> <http://example.com/paid> "true"^^<http://www.w3.org/2001/XMLSchema#boolean> .
<http://example.com/Patient12> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://xmlns.com/foaf/0.1/Person> .
<http://example.com/Patient12> <http://example.com/paid> "true"^^<http://www.w3.org/2001/XMLSchema#boolean> .

```

