## RMLIOREGTC0003c

**Title**: Invalid XPath expression

**Description**: Handle invalid XPath (unparseable)

**Error expected?** Yes

**Input**
 [http://w3id.org/rml/resources/rml-io/RMLIOREGTC0003c/student.xml](http://w3id.org/rml/resources/rml-io/RMLIOREGTC0003c/student.xml)

**Mapping**
```
@prefix foaf: <http://xmlns.com/foaf/0.1/> .
@prefix rml: <http://w3id.org/rml/> .

<http://example.com/base/TriplesMap1> a rml:TriplesMap;
  rml:logicalSource [ a rml:LogicalSource;
      rml:iterator "???dflidjsgfldfsnglds";
      rml:referenceFormulation rml:XPath;
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

