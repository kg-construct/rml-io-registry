# Access description

RML leverages `dcat:Distribution` for defining how remote or local dataset accessed in a RML Logical Source's `rml:source`.
RML only uses the following properties of a `dcat:Distribution`:

- `dcat:accessURL`: The IRI to retrieve the dataset.

Example of a DCAT distribution in a RML mapping:

```
<LogicalSource> a rml:LogicalSource;
  rml:source [ a rml:Source, dcat:Distribution;
    dcat:accessURL <http://example.org/dcat-access-url>;
  ];
.
```
