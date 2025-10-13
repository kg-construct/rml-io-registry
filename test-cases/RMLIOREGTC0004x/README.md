## RMLIOREGTC0004x

**Title**: MySQL: Table with datatypes: date and timestamp

**Description**: Tests the rml:termType and datatype conversions: date and timestamp

**Error expected?** No

**Input**
 [http://w3id.org/rml/resources/rml-io/RMLIOREGTC0004x/resource.sql](http://w3id.org/rml/resources/rml-io/RMLIOREGTC0004x/resource.sql)

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
          rml:reference "BirthDate"
        ];
      rml:predicate ex:birthdate
    ], [
      rml:objectMap [
          rml:reference "EntranceDate"
        ];
      rml:predicate ex:entrancedate
    ];
  rml:subjectMap [
      rml:template "http://example.com/Patient{ID}"
    ] .

<http://example.com/base/#DB_source> a d2rq:Database;
  d2rq:jdbcDSN "CONNECTIONDSN";
  d2rq:jdbcDriver "com.mysql.cj.jdbc.Driver";
  d2rq:password "";
  d2rq:username "root" .

```

**Output**
```
<http://example.com/Patient10> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://xmlns.com/foaf/0.1/Person> .
<http://example.com/Patient10> <http://example.com/birthdate> "1981-10-10"^^<http://www.w3.org/2001/XMLSchema#date> .
<http://example.com/Patient10> <http://example.com/entrancedate> "2009-10-10T12:12:22"^^<http://www.w3.org/2001/XMLSchema#dateTime> .
<http://example.com/Patient11> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://xmlns.com/foaf/0.1/Person> .
<http://example.com/Patient11> <http://example.com/birthdate> "1982-11-12"^^<http://www.w3.org/2001/XMLSchema#date> .
<http://example.com/Patient11> <http://example.com/entrancedate> "2008-11-12T09:45:44"^^<http://www.w3.org/2001/XMLSchema#dateTime> .
<http://example.com/Patient12> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://xmlns.com/foaf/0.1/Person> .
<http://example.com/Patient12> <http://example.com/birthdate> "1978-04-06"^^<http://www.w3.org/2001/XMLSchema#date> .
<http://example.com/Patient12> <http://example.com/entrancedate> "2007-03-12T02:13:14"^^<http://www.w3.org/2001/XMLSchema#dateTime> .

```

