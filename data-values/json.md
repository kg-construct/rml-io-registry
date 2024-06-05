# JSON Data values

> Based onhttps://www.w3.org/TR/json-ld11/#conversion-of-native-data-types

Let _dv_ be the JSON data value.
Let _dt_ be the JSON data value type.
The natural RDF literal corresponding to _dv_ is the result of applying the following steps:

1. If _dt_ is listed in the table below: The result is a [[typed literal]] whose [[datatype IRI]] is the IRI indicated in the _RDF datatype_ column in the same row as _dt_. The [[lexical form]] _MAY_ be any lexical form that represents the same value as the JSON data value, according to the definition of the RDF datatype. The [canonical lexical representation](https://www.w3.org/TR/xmlschema11-2/#dt-canonical-representation) _MAY_ be chosen.
2. Otherwise, the natural RDF datatype is a [[plain literal]] without [[language tag]].

| _dt_ | RDF datatype | Lexical transformation (informative) |
|-|-|-|
|`number` without fraction|`[xsd:integer](https://www.w3.org/TR/xmlschema11-2/#integer)`|none required|
|`number` with fraction|`[xsd:double](https://www.w3.org/TR/xmlschema11-2/#double)`|none required|
|`boolean`|`[xsd:boolean](https://www.w3.org/TR/xmlschema11-2/#boolean)`|ensure lowercase (`true`, `false`)|
