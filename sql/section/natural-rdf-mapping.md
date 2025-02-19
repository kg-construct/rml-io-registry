# Natural RDF mapping of SQL values

The natural mapping of data types of SQL values for RDF is based on [[R2RML]]:

The <a data-cite="RML-Core#dfn-natural-rdf-literal">natural RDF literal</a> corresponding to a [=SQL value=] is the result of applying the following steps:

1. Let _dv_ be the [=SQL value=].
2. Let _dt_ be the type of [=SQL value=] [[SQL]].
3. If _dt_ is listed in the table below: The result is a [=literal=] whose [=datatype IRI=] is the IRI indicated in the _RDF datatype_ column in the same row as _dt_. The [=lexical form=] MUST be <a data-cite="RML-Core#dfn-natural-rdf-lexical-form">natural RDF lexical form</a>.

| _dt_                                          | RDF datatype             | Lexical transformation (informative)           |
| --------------------------------------------- | ------------------------ | ---------------------------------------------- |
| `BINARY, BINARY VARYING, BINARY LARGE OBJECT` | `xsd:hexBinary`          | https://www.w3.org/TR/xmlschema11-2/#hexBinary |
| `NUMERIC, DECIMAL`                            | `xsd:decimal`            | none required                                  |
| `SMALLINT, INTEGER, BIGINT`                   | `xsd:integer`            | none required                                  |
| `FLOAT, REAL, DOUBLE PRECISION`               | `xsd:double`             | none required                                  |
| `BOOLEAN`                                     | `xsd:boolean`            | ensure lowercase (`true`, `false`)             |
| `DATE`                                        | `xsd:date`               | none required                                  |
| `TIME`                                        | `xsd:time`               | none required                                  |
| `TIMESTAMP`                                   | `xsd:dateTime`           | replace space character with `T`               |
| `INTERVAL`                                    | undefined                | undefined                                      |
