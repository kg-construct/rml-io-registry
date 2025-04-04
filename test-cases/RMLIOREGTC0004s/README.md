## RMLIOREGTC0004s

**Title**: MySQL: M to M relation, by using an additional Triples Map

**Description**: Tests, M to M relations, by using an additional Triples Map

**Error expected?** No

**Input**
 [http://w3id.org/rml/resources/rml-io/RMLIOREGTC0004s/Friends.json](http://w3id.org/rml/resources/rml-io/RMLIOREGTC0004s/Friends.json)

**Mapping**
```
@prefix d2rq: <http://www.wiwiss.fu-berlin.de/suhl/bizer/D2RQ/0.1#> .
@prefix ex: <http://example.com/> .
@prefix rml: <http://w3id.org/rml/> .

<http://example.com/base/LinkMap_1_2> a rml:TriplesMap;
  rml:logicalSource [
      rml:source <http://example.com/base/#DB_source>;
      rml:referenceFormulation rml:SQL2008Table;
      rml:iterator "student_sport"
    ];
  rml:predicateObjectMap [
      rml:objectMap [
          rml:template "http://example.com/sport/{ID_Sport}"
        ];
      rml:predicate ex:plays
    ];
  rml:subjectMap [
      rml:template "http://example.com/student/{ID_Student}"
    ] .

<http://example.com/base/TriplesMap1> a rml:TriplesMap;
  rml:logicalSource [
      rml:source <http://example.com/base/#DB_source>;
      rml:referenceFormulation rml:SQL2008Table;
      rml:iterator "student"
    ];
  rml:predicateObjectMap [
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
      rml:template "http://example.com/student/{ID}"
    ] .

<http://example.com/base/TriplesMap2> a rml:TriplesMap;
  rml:logicalSource [
      rml:source <http://example.com/base/#DB_source>;
      rml:referenceFormulation rml:SQL2008Table;
      rml:iterator "sport"
    ];
  rml:predicateObjectMap [
      rml:objectMap [
          rml:reference "Description"
        ];
      rml:predicate ex:description
    ], [
      rml:objectMap [
          rml:reference "ID"
        ];
      rml:predicate ex:id
    ];
  rml:subjectMap [
      rml:template "http://example.com/sport/{ID}"
    ] .

<http://example.com/base/#DB_source> a d2rq:Database;
  d2rq:jdbcDSN "CONNECTIONDSN";
  d2rq:jdbcDriver "com.mysql.cj.jdbc.Driver";
  d2rq:password "";
  d2rq:username "root" .

```

**Output**
```
<http://example.com/student/10> <http://example.com/lastName> "Williams" .
<http://example.com/student/10> <http://example.com/firstName> "Venus" .
<http://example.com/student/12> <http://example.com/lastName> "Villa" .
<http://example.com/student/12> <http://example.com/firstName> "David" .
<http://example.com/student/11> <http://example.com/lastName> "Alonso" .
<http://example.com/student/11> <http://example.com/firstName> "Fernando" .
<http://example.com/sport/110> <http://example.com/description> "Tennis" .
<http://example.com/sport/110> <http://example.com/id> "110"^^<http://www.w3.org/2001/XMLSchema#integer> .
<http://example.com/sport/111> <http://example.com/description> "Football" .
<http://example.com/sport/111> <http://example.com/id> "111"^^<http://www.w3.org/2001/XMLSchema#integer> .
<http://example.com/sport/112> <http://example.com/description> "Formula1" .
<http://example.com/sport/112> <http://example.com/id> "112"^^<http://www.w3.org/2001/XMLSchema#integer> .
<http://example.com/student/10> <http://example.com/plays> <http://example.com/sport/110> .
<http://example.com/student/12> <http://example.com/plays> <http://example.com/sport/111> .
<http://example.com/student/11> <http://example.com/plays> <http://example.com/sport/112> .
<http://example.com/student/11> <http://example.com/plays> <http://example.com/sport/111> .


```

