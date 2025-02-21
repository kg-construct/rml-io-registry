# Access description

RML leverages `dcat:Distribution` for defining how remote or local dataset accessed in a RML Logical Source's `rml:source`.
RML only uses one of the following properties of a `dcat:Distribution`, depending on the type of dataset, defined by in the DCAT specification:

- `dcat:accessURL`: The IRI to access the data service.
- `dcat:downloadURL`: The IRI to retrieve the dataset.

Example of a DCAT Distribution in a RML mapping with a retrievable dataset:

```
<LogicalSource> a rml:LogicalSource;
  rml:source [ a rml:Source, dcat:Distribution;
    dcat:downloadURL <http://example.org/dcat-download-url>;
  ];
.
```

Example of a DCAT Distribution in a RML mapping with a data service:

```
<LogicalSource> a rml:LogicalSource;
  rml:source [ a rml:Source, dcat:Distribution;
    dcat:accessURL <http://example.org/dcat-access-url>;
  ];
.
```
