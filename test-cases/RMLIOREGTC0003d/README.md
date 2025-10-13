## RMLIOREGTC0003d

**Title**: XML Namespace

**Description**: Handle XML namespaces in expressions

**Error expected?** No

**Input**
 [http://w3id.org/rml/resources/rml-io/RMLIOREGTC0003d/student.xml](http://w3id.org/rml/resources/rml-io/RMLIOREGTC0003d/student.xml)

**Mapping**
```
@prefix foaf: <http://xmlns.com/foaf/0.1/> .
@prefix rml: <http://w3id.org/rml/> .

<http://example.com/base/TriplesMap1> a rml:TriplesMap;
  rml:logicalSource [ a rml:LogicalSource;
      rml:iterator "/ex:students/student";
      rml:referenceFormulation [ a rml:XPathReferenceFormulation;
        rml:namespace [ a rml:Namespace;
         rml:namespacePrefix "ex";
         rml:namespaceURL "http://example.org";
       ];
      ];
      rml:source [ a rml:RelativePathSource;
          rml:root rml:MappingDirectory;
          rml:path "student.xml"
        ]
    ];
  rml:predicateObjectMap [
      rml:objectMap [
          rml:reference "Name"
        ];
      rml:predicate foaf:name
    ];
  rml:subjectMap [
      rml:template "http://example.com/{Name}"
    ] .

```

**Output**
```
<http://example.com/Venus> <http://xmlns.com/foaf/0.1/name> "Venus" .


```

