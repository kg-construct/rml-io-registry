# Natural RDF mapping of CSV values

CSV does not provide any native data types, therefore there is no natural RDF mapping of CSV values upon XSD data types.
CSVW allows to specify for each column the data type in a `csvw:Table`:


<aside class="ex-mapping">
<CSVWTable> a csvw:Table;
  csvw:tableSchema [
    csvw:columns [
      csvw:name "Column";
      csvw:datatype xsd:integer;
    ];
  ]. 
</aside>

The `csvw:datatype` must be used for the natural mapping of datatypes in RDF from CSV values.

See https://w3c.github.io/csvw/syntax/#datatypes for a detailed overview.
