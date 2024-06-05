# JSON references

## Natural Mapping of JSON Values

The natural RDF literal corresponding to a JSON data value is the result of applying the following steps:

1.  Let _dt_ be the JSON datatype of the JSON data value.
2.  If _dt_ is listed in the [table below](#table-type-mapping): The result is a [typed literal](#dfn-typed-literal) whose [datatype IRI](#dfn-datatype-iri) is the IRI indicated in the _RDF datatype_ column in the same row as _dt_. The [lexical form](#dfn-lexical-form) may be any lexical form that represents the same value as the JSON data value, according to the definition of the RDF datatype. If there are multiple lexical forms available that represent the same value (e.g., `1`, `+1`, `1.0` and `1.0E0`), then the choice is implementation-dependent. However, the choice _MUST_ be made so that given a target RDF datatype and value, the same lexical form is chosen consistently (e.g., `INTEGER 5` and `BIGINT 5` must be mapped to the same lexical form, as both are mapped to the RDF datatype `xsd:integer` and are equal values; mapping one to `5` and the other to `+5` would be an error). The [canonical lexical representation](https://www.w3.org/TR/xmlschema11-2/#dt-canonical-representation) \[[XMLSCHEMA2](#XMLSCHEMA2)\] _MAY_ be chosen. (See also: [Summary of XSD Lexical Forms](#xsd-summary))
3.  Otherwise, the result is a [plain literal](#dfn-plain-literal) without [language tag](#dfn-language-tag) whose [lexical form](#dfn-lexical-form) is the SQL data value [cast to string](#dfn-cast-to-string).

| JSON datatype | RDF datatype | Lexical transformation (informative) |
|-|-|-|
|`number`|`[xsd:double](https://www.w3.org/TR/xmlschema11-2/#double)`|none required|
|`boolean`|`[xsd:boolean](https://www.w3.org/TR/xmlschema11-2/#boolean)`|ensure lowercase (`true`, `false`)|
