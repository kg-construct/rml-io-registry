## RMLIOREGTC0012b

**Title**: CSVW null value

**Description**: Apply csvw:null as NULL value for the CSV file

**Error expected?** No

**Input**
```
ID;Name
10;Venus
11;NULL
12;Serena
13;null

```

**Mapping**
```
# A single csvw:null value

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
   csvw:url "student.csv" ;
   csvw:dialect [ a csvw:Dialect;
       csvw:delimiter ";"
   ];
   csvw:null "NULL".

```

**Output**
```
<http://example.com/10/Venus> <http://xmlns.com/foaf/0.1/name> "Venus" .
<http://example.com/10/Venus> <http://example.com/id> "10" .
<http://example.com/10/Venus> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://xmlns.com/foaf/0.1/Person> .
<http://example.com/12/Serena> <http://example.com/id> "12" .
<http://example.com/12/Serena> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://xmlns.com/foaf/0.1/Person> .
<http://example.com/12/Serena> <http://xmlns.com/foaf/0.1/name> "Serena" .
<http://example.com/13/null> <http://example.com/id> "13" .
<http://example.com/13/null> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://xmlns.com/foaf/0.1/Person> .
<http://example.com/13/null> <http://xmlns.com/foaf/0.1/name> "null" .

```

