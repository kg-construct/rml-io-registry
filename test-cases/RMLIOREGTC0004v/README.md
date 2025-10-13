## RMLIOREGTC0004v

**Title**: MySQL: Table with datatypes: string and integer

**Description**: Tests the rml:termType and datatype conversions: string and integer

**Error expected?** No

**Input**
 [http://w3id.org/rml/resources/rml-io/RMLIOREGTC0004v/resource.sql](http://w3id.org/rml/resources/rml-io/RMLIOREGTC0004v/resource.sql)

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
      rml:objectMap [
          rml:reference "Sex"
        ];
      rml:predicate ex:gender
    ], [
      rml:object foaf:Person;
      rml:predicate rdf:type
    ], [
      rml:objectMap [
          rml:reference "ID"
        ];
      rml:predicate ex:id
    ], [
      rml:objectMap [
          rml:reference "FirstName"
        ];
      rml:predicate ex:firstName
    ], [
      rml:objectMap [
          rml:reference "LastName"
        ];
      rml:predicate ex:lastName
    ];
  rml:subjectMap [
      rml:template "http://example.com/Patient/{ID}"
    ] .

<http://example.com/base/#DB_source> a d2rq:Database;
  d2rq:jdbcDSN "CONNECTIONDSN";
  d2rq:jdbcDriver "com.mysql.cj.jdbc.Driver";
  d2rq:password "";
  d2rq:username "root" .

```

**Output**
```
<http://example.com/Patient/10> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://xmlns.com/foaf/0.1/Person> .
<http://example.com/Patient/10> <http://example.com/id> "10"^^<http://www.w3.org/2001/XMLSchema#integer> .
<http://example.com/Patient/10> <http://example.com/firstName> "Monica" .
<http://example.com/Patient/10> <http://example.com/lastName> "Geller" .
<http://example.com/Patient/10> <http://example.com/gender> "female" .
<http://example.com/Patient/11> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://xmlns.com/foaf/0.1/Person> .
<http://example.com/Patient/11> <http://example.com/id> "11"^^<http://www.w3.org/2001/XMLSchema#integer> .
<http://example.com/Patient/11> <http://example.com/firstName> "Rachel" .
<http://example.com/Patient/11> <http://example.com/lastName> "Green" .
<http://example.com/Patient/11> <http://example.com/gender> "female" .
<http://example.com/Patient/12> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://xmlns.com/foaf/0.1/Person> .
<http://example.com/Patient/12> <http://example.com/id> "12"^^<http://www.w3.org/2001/XMLSchema#integer> .
<http://example.com/Patient/12> <http://example.com/firstName> "Chandler" .
<http://example.com/Patient/12> <http://example.com/lastName> "Bing" .
<http://example.com/Patient/12> <http://example.com/gender> "male" .


```

