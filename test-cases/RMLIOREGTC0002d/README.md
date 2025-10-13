## RMLIOREGTC0002d

**Title**: JSON null

**Description**: Skip JSON null values

**Error expected?** No

**Input**
 [http://w3id.org/rml/resources/rml-io/RMLIOREGTC0002d/student.json](http://w3id.org/rml/resources/rml-io/RMLIOREGTC0002d/student.json)

**Mapping**
```
@prefix foaf: <http://xmlns.com/foaf/0.1/> .
@prefix rml: <http://w3id.org/rml/> .

<http://example.com/base/TriplesMap1> a rml:TriplesMap;
  rml:logicalSource [ a rml:LogicalSource;
      rml:iterator "$.students[*]";
      rml:referenceFormulation rml:JSONPath;
      rml:source [ a rml:RelativePathSource;
          rml:root rml:MappingDirectory;
          rml:path "student.json"
        ]
    ];
  rml:predicateObjectMap [
      rml:objectMap [
          rml:reference "$.Name"
        ];
      rml:predicate foaf:name
    ];
  rml:subjectMap <http://example.com/base/#NameSubjectMap> .

<http://example.com/base/#NameSubjectMap> rml:template "http://example.com/{$.Name}" .

```

**Output**
```
<http://example.com/Venus> <http://xmlns.com/foaf/0.1/name> "Venus" .


```

