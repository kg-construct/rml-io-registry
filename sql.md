# SQL references

## Natural Mapping of SQL Values

> Taken from https://www.w3.org/TR/r2rml/#natural-mapping

The natural RDF literal corresponding to a SQL data value is the result of applying the following steps:

1.  Let _dt_ be the SQL datatype of the SQL data value.
2.  If _dt_ is a character string type (in Core SQL 2008: `CHARACTER`, `CHARACTER VARYING`, `CHARACTER LARGE OBJECT`, `NATIONAL CHARACTER`, `NATIONAL CHARACTER VARYING`, `NATIONAL CHARACTER LARGE OBJECT`), then the result is a [plain literal](#dfn-plain-literal) without [language tag](#dfn-language-tag) whose [lexical form](#dfn-lexical-form) is the SQL data value.
3.  Otherwise, if _dt_ is listed in the [table below](#table-type-mapping): The result is a [typed literal](#dfn-typed-literal) whose [datatype IRI](#dfn-datatype-iri) is the IRI indicated in the _RDF datatype_ column in the same row as _dt_. The [lexical form](#dfn-lexical-form) may be any lexical form that represents the same value as the SQL data value, according to the definition of the RDF datatype. If there are multiple lexical forms available that represent the same value (e.g., `1`, `+1`, `1.0` and `1.0E0`), then the choice is implementation-dependent. However, the choice _MUST_ be made so that given a target RDF datatype and value, the same lexical form is chosen consistently (e.g., `INTEGER 5` and `BIGINT 5` must be mapped to the same lexical form, as both are mapped to the RDF datatype `xsd:integer` and are equal values; mapping one to `5` and the other to `+5` would be an error). The [canonical lexical representation](https://www.w3.org/TR/xmlschema11-2/#dt-canonical-representation) \[[XMLSCHEMA2](#XMLSCHEMA2)\] _MAY_ be chosen. (See also: [Summary of XSD Lexical Forms](#xsd-summary))
4.  Otherwise, the result is a [plain literal](#dfn-plain-literal) without [language tag](#dfn-language-tag) whose [lexical form](#dfn-lexical-form) is the SQL data value [cast to string](#dfn-cast-to-string).

| SQL datatype | RDF datatype | Lexical transformation (informative) |
|-|-|-|
|`BINARY`, `BINARY VARYING`, `BINARY LARGE OBJECT`|`[xsd:hexBinary](https://www.w3.org/TR/xmlschema11-2/#hexBinary)`|[`xsd:hexBinary` lexical mapping](https://www.w3.org/TR/xmlschema11-2/#hexBinary)|
|`NUMERIC`, `DECIMAL`|`[xsd:decimal](https://www.w3.org/TR/xmlschema11-2/#decimal)`|none required|
|`SMALLINT`, `INTEGER`, `BIGINT`|`[xsd:integer](https://www.w3.org/TR/xmlschema11-2/#integer)`|none required|
|`FLOAT`, `REAL`, `DOUBLE PRECISION`|`[xsd:double](https://www.w3.org/TR/xmlschema11-2/#double)`|none required|
|`BOOLEAN`|`[xsd:boolean](https://www.w3.org/TR/xmlschema11-2/#boolean)`|ensure lowercase (`true`, `false`)|
|`DATE`|`[xsd:date](https://www.w3.org/TR/xmlschema11-2/#date)`|none required|
|`TIME`|`[xsd:time](https://www.w3.org/TR/xmlschema11-2/#time)`|none required|
|`TIMESTAMP`|`[xsd:dateTime](https://www.w3.org/TR/xmlschema11-2/#dateTime)`|replace space character with “`T`”|
|`INTERVAL`|undefined|undefined|

> R2RML extensions that handle vendor-specific or user-defined datatypes beyond those of Core SQL 2008 are expected to behave as if the table above contained additional rows that associate the SQL datatypes with appropriate RDF-compatible datatypes (e.g., the [XML Schema built-in types](https://www.w3.org/TR/xmlschema11-2/#built-in-datatypes) \[[XMLSCHEMA2](#XMLSCHEMA2)\]), and appropriate lexical transformations where required. Note however that future versions of R2RML may also normatively add additional rows to this table.

> The translation of `INTERVAL` is left undefined due to the complexity of the translation. \[[SQL14](#SQL14)\] describes a translation of `INTERVAL` to `xdt:yearMonthDuration` and `xdt:dayTimeDuration`.

> In \[[SQL2](#SQL2)\], the precision of many SQL datatypes is not fixed, but left implementation-defined. Therefore, the mapping to XML Schema datatypes must rely on arbitrary-precision types such as `xsd:decimal`, `xsd:integer` and `xsd:dateTime`. Implementers of the mapping may wish to set upper limits for the supported precision of these XSD types. The XML Schema specification allows such _[partial implementations of infinite datatypes](https://www.w3.org/TR/xmlschema11-2/#partial-implementation)_ \[[XMLSCHEMA2](#XMLSCHEMA2)\], and defines specific minimum requirements.

The natural RDF datatype corresponding to a SQL datatype is the value of the _RDF datatype_ column in the row corresponding to the SQL datatype in the [table above](#table-type-mapping).

The natural RDF lexical form corresponding to a SQL data value is the [lexical form](#dfn-lexical-form) of its corresponding [natural RDF literal](#dfn-natural-rdf-literal), with the additional constraint that the [canonical lexical representation](https://www.w3.org/TR/xmlschema11-2/#dt-canonical-representation) \[[XMLSCHEMA2](#XMLSCHEMA2)\] _SHOULD_ be chosen.

The canonical RDF lexical form corresponding to a SQL data value is the [lexical form](#dfn-lexical-form) of its corresponding [natural RDF literal](#dfn-natural-rdf-literal), with the additional constraint that the [canonical lexical representation](https://www.w3.org/TR/xmlschema11-2/#dt-canonical-representation) \[[XMLSCHEMA2](#XMLSCHEMA2)\] _MUST_ be chosen.

Cast to string is an implementation-dependent function that maps SQL data values to equivalent Unicode strings. It is undefined for the following kinds of SQL datatypes: collection types, row types, user-defined types without a user-defined string `CAST`, reference types whose referenced type does not have a user-defined string `CAST`, binary types.

> [Cast to string](#dfn-cast-to-string) is a fallback that handles vendor-specific and user-defined datatypes not supported by the R2RML processor. It can be implemented in a number of ways, including explicit SQL casts (“`CAST(_value_ AS VARCHAR(_n_))`”, where _n_ is an arbitrary large integer), implicit SQL casts (concatenation with the empty string), or by employing a database access API that presents return values as strings.
