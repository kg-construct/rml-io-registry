## RMLIOREGTC0004o

**Title**: MySQL: Default mapping

**Description**: Tests the generation of a default mapping for tables without a primary key

**Error expected?** No

**Input**
 [http://w3id.org/rml/resources/rml-io/RMLIOREGTC0004o/Friends.json](http://w3id.org/rml/resources/rml-io/RMLIOREGTC0004o/Friends.json)

**Mapping**
```
@prefix d2rq: <http://www.wiwiss.fu-berlin.de/suhl/bizer/D2RQ/0.1#> .
@prefix rml: <http://w3id.org/rml/> .

<http://example.com/base/TriplesMap1> a rml:TriplesMap;
  rml:logicalSource [
      rml:source <http://example.com/base/#DB_source>;
      rml:referenceFormulation rml:SQL2008Table;
      rml:iterator "IOUs"
    ];
  rml:predicateObjectMap [
      rml:objectMap [
          rml:reference "fname"
        ];
      rml:predicate <http://example.com/base/IOUs#fname>
    ], [
      rml:objectMap [
          rml:reference "lname"
        ];
      rml:predicate <http://example.com/base/IOUs#lname>
    ], [
      rml:objectMap [
          rml:reference "amount"
        ];
      rml:predicate <http://example.com/base/IOUs#amount>
    ];
  rml:subjectMap [
      rml:class <http://example.com/base/IOUs>;
      rml:template "{fname}_{lname}";
      rml:termType rml:BlankNode
    ] .

<http://example.com/base/#DB_source> a d2rq:Database;
  d2rq:jdbcDSN "CONNECTIONDSN";
  d2rq:jdbcDriver "com.mysql.cj.jdbc.Driver";
  d2rq:password "";
  d2rq:username "root" .

```

**Output**
```
_:Bob_Smith <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://example.com/base/IOUs> .
_:Bob_Smith <http://example.com/base/IOUs#fname> "Bob" .
_:Bob_Smith <http://example.com/base/IOUs#lname> "Smith" .
_:Bob_Smith <http://example.com/base/IOUs#amount> "3.0E1"^^<http://www.w3.org/2001/XMLSchema#double> .
_:Sue_Jones <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://example.com/base/IOUs> .
_:Sue_Jones <http://example.com/base/IOUs#fname> "Sue" .
_:Sue_Jones <http://example.com/base/IOUs#lname> "Jones" .
_:Sue_Jones <http://example.com/base/IOUs#amount> "2.0E1"^^<http://www.w3.org/2001/XMLSchema#double> .
	

```

