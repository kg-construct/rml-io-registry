## RMLIOREGTC0012i

**Title**: CSVW Quote Character

**Description**: Define quote character for columns

**Error expected?** No

**Input**
 [http://w3id.org/rml/resources/rml-io/RMLIOREGTC0012i/Friends.json](http://w3id.org/rml/resources/rml-io/RMLIOREGTC0012i/Friends.json)

**Mapping**
```
@prefix csvw: <http://www.w3.org/ns/csvw#> .
@prefix rr: <http://www.w3.org/ns/r2rml#> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .
@prefix ex: <http://example.com/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
@prefix rml: <http://semweb.mmlab.be/ns/rml#> .
@base <http://example.com/base/> .

<TriplesMap1> a rr:TriplesMap;
    
  rml:logicalSource [ 
    rml:source <#CSVW_source>;
    rml:referenceFormulation rml:CSV
  ];

  rr:subjectMap [ 
    rr:template "http://example.com/{ID}/{Name}";
    rr:class foaf:Person 
  ];

  rr:predicateObjectMap [ 
    rr:predicate ex:id ; 
    rr:objectMap [ rml:reference "ID" ]
  ];

  rr:predicateObjectMap [ 
    rr:predicate foaf:name ; 
    rr:objectMap [ rml:reference "Name" ]
  ].

<#CSVW_source> a csvw:Table;
   csvw:url "Friends.csv" ;
   csvw:dialect [ a csvw:Dialect;
       csvw:quoteChar "'";
   ] .

```

**Output**
```
<http://example.org/0> <http://xmlns.com/foaf/0.1/age> "33" .
<http://example.org/0> <http://xmlns.com/foaf/0.1/name> "Monica Geller" .
<http://example.org/1> <http://xmlns.com/foaf/0.1/age> "34" .
<http://example.org/1> <http://xmlns.com/foaf/0.1/name> "Rachel Green" .
<http://example.org/2> <http://xmlns.com/foaf/0.1/age> "35" .
<http://example.org/2> <http://xmlns.com/foaf/0.1/name> "Joey Tribbiani" .
<http://example.org/3> <http://xmlns.com/foaf/0.1/age> "36" .
<http://example.org/3> <http://xmlns.com/foaf/0.1/name> "Chandler Bing" .
<http://example.org/4> <http://xmlns.com/foaf/0.1/age> "37" .
<http://example.org/4> <http://xmlns.com/foaf/0.1/name> "Ross Geller" .

```

