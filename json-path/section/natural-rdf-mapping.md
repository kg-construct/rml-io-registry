# Natural RDF mapping of JSON values

> Based on https://www.w3.org/TR/json-ld11/#conversion-of-native-data-types

The <a data-cite="RML-Core#dfn-natural-rdf-literal">natural RDF literal</a>
corresponding to a [=JSON value=] is the result of applying the following steps:

1. Let _v_ be the [=JSON value=].
2. Let _dt_ be the [[JSON]] data type of v.
3. If _dt_ is listed in the table below then:  
   * The result is an RDF [=literal=] whose [=datatype IRI=] is the IRI indicated
   in the _RDF datatype_ column in the same row as _dt_. 
   * The [=lexical form=] of the resulting RDF [=literal=] MUST be
   <a data-cite="RML-Core#dfn-natural-rdf-lexical-form">natural RDF lexical form</a>
   of _v_ with the corresponding transformation (from the same row as _dt_) applied .

| _dt_                      | RDF datatype                                                  | Lexical transformation (informative) |
| ------------------------- | ------------------------------------------------------------- | ------------------------------------ |
| `number` without fraction | [`xsd:integer`](https://www.w3.org/TR/xmlschema11-2/#integer) | none required                        |
| `number` with fraction    | [`xsd:double`](https://www.w3.org/TR/xmlschema11-2/#double)   | none required                        |
| literal value `true`      | [`xsd:boolean`](https://www.w3.org/TR/xmlschema11-2/#boolean) | ensure lowercase (`true`)            |
| literal value `false`     | [`xsd:boolean`](https://www.w3.org/TR/xmlschema11-2/#boolean) | ensure lowercase (`false`)           |
| `string`                  | [`xsd:string`](https://www.w3.org/TR/xmlschema11-2/#string)   | none required                        |
