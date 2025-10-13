## RMLIOREGTC0005r

**Title**: PostgreSQL: M to M relation, by using a SQL query

**Description**: Tests, M to M relations, by using a SQL query

**Error expected?** No

**Input**
 [http://w3id.org/rml/resources/rml-io/RMLIOREGTC0005r/resource.sql](http://w3id.org/rml/resources/rml-io/RMLIOREGTC0005r/resource.sql)

**Mapping**
```
@prefix d2rq: <http://www.wiwiss.fu-berlin.de/suhl/bizer/D2RQ/0.1#> .
@prefix ex: <http://example.com/> .
@prefix rml: <http://w3id.org/rml/> .

<http://example.com/base/TriplesMap1> a rml:TriplesMap;
  rml:logicalSource [ a rml:LogicalSource;
      rml:iterator """
       SELECT Student.ID as ID,
              Student.FirstName as FirstName,
              Student.LastName as LastName,
              Sport.Description as Description,
              Sport.ID as Sport_ID
       FROM Student,Sport,Student_Sport
       WHERE Student.ID = Student_Sport.ID_Student
       AND Sport.ID = Student_Sport.ID_Sport;
       """;
      rml:referenceFormulation rml:SQL2008Query;
      rml:source <http://example.com/base/#DB_source>
    ];
  rml:predicateObjectMap [
      rml:objectMap [
          rml:reference "id"
        ];
      rml:predicate ex:id
    ], [
      rml:objectMap [
          rml:reference "firstname"
        ];
      rml:predicate ex:firstName
    ], [
      rml:objectMap [
          rml:reference "lastname"
        ];
      rml:predicate ex:lastName
    ], [
      rml:objectMap [
          rml:template "http://example.com/{sport_id}/{description}"
        ];
      rml:predicate ex:plays
    ];
  rml:subjectMap [
      rml:template "http://example.com/{id}/{firstname};{lastname}"
    ] .

<http://example.com/base/TriplesMap2> a rml:TriplesMap;
  rml:logicalSource [ a rml:LogicalSource;
      rml:iterator """
       SELECT * FROM Sport ;
       """;
      rml:referenceFormulation rml:SQL2008Query;
      rml:source <http://example.com/base/#DB_source>
    ];
  rml:predicateObjectMap [
      rml:objectMap [
          rml:reference "id"
        ];
      rml:predicate ex:id
    ], [
      rml:objectMap [
          rml:reference "description"
        ];
      rml:predicate ex:description
    ];
  rml:subjectMap [
      rml:template "http://example.com/{id}/{description}"
    ] .

<http://example.com/base/#DB_source> a d2rq:Database;
  d2rq:jdbcDSN "CONNECTIONDSN";
  d2rq:jdbcDriver "org.postgresql.Driver";
  d2rq:password "";
  d2rq:username "postgres" .

```

**Output**
```
<http://example.com/110/Tennis> <http://example.com/description> "Tennis" .
<http://example.com/110/Tennis> <http://example.com/id> "110"^^<http://www.w3.org/2001/XMLSchema#integer> .
<http://example.com/10/Venus;Williams> <http://example.com/plays> <http://example.com/110/Tennis> .
<http://example.com/10/Venus;Williams> <http://example.com/lastName> "Williams" .
<http://example.com/10/Venus;Williams> <http://example.com/firstName> "Venus" .
<http://example.com/10/Venus;Williams> <http://example.com/id> "10"^^<http://www.w3.org/2001/XMLSchema#integer> .
<http://example.com/111/Football> <http://example.com/description> "Football" .
<http://example.com/111/Football> <http://example.com/id> "111"^^<http://www.w3.org/2001/XMLSchema#integer> .
<http://example.com/12/David;Villa> <http://example.com/plays> <http://example.com/111/Football> .
<http://example.com/12/David;Villa> <http://example.com/lastName> "Villa" .
<http://example.com/12/David;Villa> <http://example.com/firstName> "David" .
<http://example.com/12/David;Villa> <http://example.com/id> "12"^^<http://www.w3.org/2001/XMLSchema#integer> .
<http://example.com/112/Formula1> <http://example.com/description> "Formula1" .
<http://example.com/112/Formula1> <http://example.com/id> "112"^^<http://www.w3.org/2001/XMLSchema#integer> .
<http://example.com/11/Fernando;Alonso> <http://example.com/lastName> "Alonso" .
<http://example.com/11/Fernando;Alonso> <http://example.com/firstName> "Fernando" .
<http://example.com/11/Fernando;Alonso> <http://example.com/id> "11"^^<http://www.w3.org/2001/XMLSchema#integer> .
<http://example.com/11/Fernando;Alonso> <http://example.com/plays> <http://example.com/111/Football> .
<http://example.com/11/Fernando;Alonso> <http://example.com/plays> <http://example.com/112/Formula1> .


```

