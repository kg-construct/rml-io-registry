# Access description

RML FilePath provides a way to specify access to local files with an absolute or relative path in a RML Logical Source's `rml:source`.

The following properties are defined for `rml:FilePath`:
- `rml:root`: The root against which relative paths are resolved, either `rml:CurrentWorkingDirectory` or `rml:MappingDirectory`. Optionally, defaults to `rml:CurrentWorkingDirectory`. Unused for absolute file paths.
- `rml:path`: A string Literal to specify the file path. Example: "./path/to/file.csv".

Example of a RML FilePath in a RML mapping:

```
<LogicalSource> a rml:LogicalSource;
  rml:source [ a rml:Source, rml:FilePath;
    rml:root rml:CurrentWorkingDirectory;
    rml:path "./path/to/file.csv";
  ];
.
```
