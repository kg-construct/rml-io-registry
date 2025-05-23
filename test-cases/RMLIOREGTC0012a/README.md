## RMLIOREGTC0012a

**Title**: Access a CSVW file

**Description**: Access a CSV file described with CSVW

**Error expected?** No

**Input**
 [http://w3id.org/rml/resources/rml-io/RMLIOREGTC0012a/Friends.json](http://w3id.org/rml/resources/rml-io/RMLIOREGTC0012a/Friends.json)

**Mapping**
```
@prefix rml: <http://w3id.org/rml/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .
@prefix csvw: <http://www.w3.org/ns/csvw#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
@base <http://example.com/rules/> .

<#CSVWSourceAccess> a rml:Source, csvw:Table;
  csvw:url "http://w3id.org/rml/resources/rml-io/RMLSTC0006d/Friends.csv"^^xsd:anyURI ;
  csvw:dialect [ a csvw:Dialect;
    csvw:delimiter ";";
    csvw:encoding "UTF-8";
    csvw:header "1"^^xsd:boolean;
  ];
.

<#TriplesMap> a rml:TriplesMap;
  rml:logicalSource [ a rml:LogicalSource;
    rml:source <#CSVWSourceAccess>;
    rml:referenceFormulation rml:CSV;
  ];
  rml:subjectMap [ a rml:SubjectMap;
    rml:template "http://example.org/{id}";
  ];
  rml:predicateObjectMap [ a rml:PredicateObjectMap;
    rml:predicateMap [ a rml:PredicateMap;
      rml:constant foaf:name;
    ];
    rml:objectMap [ a rml:ObjectMap;
      rml:reference "name";
    ];
  ];
  rml:predicateObjectMap [ a rml:PredicateObjectMap;
    rml:predicateMap [ a rml:PredicateMap;
      rml:constant foaf:age;
    ];
    rml:objectMap [ a rml:ObjectMap;
      rml:reference "age";
    ];
  ];
.

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

