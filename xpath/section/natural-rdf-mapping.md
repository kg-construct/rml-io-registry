# Natural RDF mapping of XML values

> Based on https://www.w3.org/TR/json-ld11/#conversion-of-native-data-types

The <a data-cite="RML-Core#dfn-natural-rdf-literal">natural RDF literal</a> corresponding to a [=XML value=] is the result of applying the following steps:

1. Let _dv_ be the [=XML value=].
1. Let _dt_ be the type of [=XML value=] [[XML]].
2. If _dt_ is listed in the table below: The result is a [=literal=] whose [=datatype IRI=] is the IRI indicated in the _RDF datatype_ column in the same row as _dt_. The [=lexical form=] MUST be <a data-cite="RML-Core#dfn-natural-rdf-lexical-form">natural RDF lexical form</a>.

Since RDF re-uses the XSD data types from XML, no transformation is needed.
