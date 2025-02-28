## RMLIOREGTC0006w

**Title**: SQLServer: Table with datatypes: real and float

**Description**: Tests the rml:termType and datatype conversions: real and float

**Error expected?** No

**Input**
 [http://w3id.org/rml/resources/rml-io/RMLIOREGTC0006w/Friends.json](http://w3id.org/rml/resources/rml-io/RMLIOREGTC0006w/Friends.json)

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
          rml:reference "Weight"
        ];
      rml:predicate ex:weight
    ], [
      rml:objectMap [
          rml:reference "Height"
        ];
      rml:predicate ex:height
    ];
  rml:subjectMap [
      rml:template "http://example.com/Patient{ID}"
    ] .

<http://example.com/base/#DB_source> a d2rq:Database;
  d2rq:jdbcDSN "CONNECTIONDSN";
  d2rq:jdbcDriver "com.microsoft.sqlserver.jdbc.SQLServerDriver";
  d2rq:password "YourSTRONG!Passw0rd;";
  d2rq:username "sa" .

```

**Output**
```
<http://example.com/Patient10> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://xmlns.com/foaf/0.1/Person> .
<http://example.com/Patient10> <http://example.com/weight> "8.025E1"^^<http://www.w3.org/2001/XMLSchema#double> .
<http://example.com/Patient10> <http://example.com/height> "1.65E0"^^<http://www.w3.org/2001/XMLSchema#double> .
<http://example.com/Patient11> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://xmlns.com/foaf/0.1/Person> .
<http://example.com/Patient11> <http://example.com/weight> "7.022E1"^^<http://www.w3.org/2001/XMLSchema#double> .
<http://example.com/Patient11> <http://example.com/height> "1.7E0"^^<http://www.w3.org/2001/XMLSchema#double> .
<http://example.com/Patient12> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://xmlns.com/foaf/0.1/Person> .
<http://example.com/Patient12> <http://example.com/weight> "9.031E1"^^<http://www.w3.org/2001/XMLSchema#double> .
<http://example.com/Patient12> <http://example.com/height> "1.76E0"^^<http://www.w3.org/2001/XMLSchema#double> .

```

