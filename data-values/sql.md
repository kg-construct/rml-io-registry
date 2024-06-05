# SQL Data Values

> Taken from https://www.w3.org/TR/r2rml/#natural-mapping

Let _dv_ be the SQL data value.
Let _dt_ be the SQL data value type.
The natural RDF literal corresponding to _dv_ is the result of applying the following steps:

1. If _dt_ is listed in the table below: The result is a [[typed literal]] whose [[datatype IRI]] is the IRI indicated in the _RDF datatype_ column in the same row as _dt_. The [[lexical form]] _MAY_ be any lexical form that represents the same value as the JSON data value, according to the definition of the RDF datatype. If there are multiple lexical forms available that represent the same value (e.g., `1`, `+1`, `1.0` and `1.0E0`), then the choice is implementation-dependent. However, the choice _MUST_ be made so that given a target RDF datatype and value, the same lexical form is chosen consistently (e.g., `INTEGER 5` and `BIGINT 5` must be mapped to the same lexical form, as both are mapped to the RDF datatype `xsd:integer` and are equal values; mapping one to `5` and the other to `+5` would be an error). The [canonical lexical representation](https://www.w3.org/TR/xmlschema11-2/#dt-canonical-representation) _MAY_ be chosen.
2. Otherwise, the natural RDF datatype is a [[plain literal]] without [[language tag]].

| _dt_ | RDF datatype | Lexical transformation (informative) |
|-|-|-|
|`BINARY`, `BINARY VARYING`, `BINARY LARGE OBJECT`|`[xsd:hexBinary](https://www.w3.org/TR/xmlschema11-2/#hexBinary)`|[`xsd:hexBinary` lexical mapping](https://www.w3.org/TR/xmlschema11-2/#hexBinary)|
|`NUMERIC`, `DECIMAL`|`[xsd:decimal](https://www.w3.org/TR/xmlschema11-2/#decimal)`|none required|
|`SMALLINT`, `INTEGER`, `BIGINT`|`[xsd:integer](https://www.w3.org/TR/xmlschema11-2/#integer)`|none required|
|`FLOAT`, `REAL`, `DOUBLE PRECISION`|`[xsd:double](https://www.w3.org/TR/xmlschema11-2/#double)`|none required|
|`BOOLEAN`|`[xsd:boolean](https://www.w3.org/TR/xmlschema11-2/#boolean)`|ensure lowercase (`true`, `false`)|
|`DATE`|`[xsd:date](https://www.w3.org/TR/xmlschema11-2/#date)`|none required|
|`TIME`|`[xsd:time](https://www.w3.org/TR/xmlschema11-2/#time)`|none required|
|`TIMESTAMP`|`[xsd:dateTime](https://www.w3.org/TR/xmlschema11-2/#dateTime)`|replace space character with “`T`”|

> In \[[SQL2](#SQL2)\], the precision of many SQL datatypes is not fixed, but left implementation-defined. Therefore, the mapping to XML Schema datatypes must rely on arbitrary-precision types such as `xsd:decimal`, `xsd:integer` and `xsd:dateTime`. Implementers of the mapping may wish to set upper limits for the supported precision of these XSD types. The XML Schema specification allows such _[partial implementations of infinite datatypes](https://www.w3.org/TR/xmlschema11-2/#partial-implementation)_ \[[XMLSCHEMA2](#XMLSCHEMA2)\], and defines specific minimum requirements.

The _natural RDF lexical form_ corresponding to a SQL data value is the [[lexical form]] of its corresponding [[natural RDF literal]], with the additional constraint that the [[canonical lexical representatio]] _SHOULD_ be chosen.

The _canonical RDF lexical form_ corresponding to a SQL data value is the [[lexical form]] of its corresponding [[natural RDF literal]], with the additional constraint that the [[canonical lexical representatio]] _MUST_ be chosen.

Cast to string is an implementation-dependent function that maps SQL data values to equivalent Unicode strings. It is undefined for the following kinds of SQL datatypes: collection types, row types, user-defined types without a user-defined string `CAST`, reference types whose referenced type does not have a user-defined string `CAST`, binary types.

> [Cast to string](#dfn-cast-to-string) is a fallback that handles vendor-specific and user-defined datatypes not supported by the R2RML processor. It can be implemented in a number of ways, including explicit SQL casts (“`CAST(_value_ AS VARCHAR(_n_))`”, where _n_ is an arbitrary large integer), implicit SQL casts (concatenation with the empty string), or by employing a database access API that presents return values as strings.
