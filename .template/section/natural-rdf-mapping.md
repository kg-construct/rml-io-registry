# Natural RDF mapping of TEMPLATE values

> Based on https://www.w3.org/TR/json-ld11/#conversion-of-native-data-types

The <a data-cite="RML-Core#dfn-natural-rdf-literal">natural RDF literal</a> corresponding to a [=TEMPLATE value=] is the result of applying the following steps:

1. Let _dv_ be the [=TEMPLATE value=].
1. Let _dt_ be the type of [=TEMPLATE value=] [[TEMPLATE]].
2. If _dt_ is listed in the table below: The result is a [=literal=] whose [=datatype IRI=] is the IRI indicated in the _RDF datatype_ column in the same row as _dt_. The [=lexical form=] MUST be <a data-cite="RML-Core#dfn-natural-rdf-lexical-form">natural RDF lexical form</a>.

| _dt_                     | RDF datatype                                                  | Lexical transformation (informative) |
| ------------------------ | ------------------------------------------------------------- | ------------------------------------ |
|`number` without fraction | [`xsd:integer`](https://www.w3.org/TR/xmlschema11-2/#integer) | none required                        |
|`number` with fraction    | [`xsd:double`](https://www.w3.org/TR/xmlschema11-2/#double)   | none required                        |
|`literal name`: `true`    | [`xsd:boolean`](https://www.w3.org/TR/xmlschema11-2/#boolean) | ensure lowercase (`true`)            |
|`literal name`: `false`   | [`xsd:boolean`](https://www.w3.org/TR/xmlschema11-2/#boolean) | ensure lowercase (`false`)           |
|`string`                  | [`xsd:string`](https://www.w3.org/TR/xmlschema11-2/#string)   | none required                        |  
