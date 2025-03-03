# CSVW Reference formulation

A <dfn>CSVW reference formulation</dfn> (`rml:CSVWReferenceFormulation`) is a <a data-cite="RML-Core#dfn-reference-formulation">reference formulation</a> that describes how to access data in a <a data-cite="RML-Core#dfn-data-source">data source</a> in [[CSV]] format with CSV on the Web (CSVW).

## Reference formulation identifier

The default CSVW Reference Formulation is a <a data-cite="RML-Core#dfn-reference-formulation">reference formulation</a> identified with the IRI `rml:CSVW`. It has no specific properties.

## Iterator

The <a data-cite="RML-Core#dfn-iterator">iterator</a> for a <a data-cite="RML-Core#dfn-logical-source">logical source</a> with the [=CSVW reference formulation=] is always row-based over a table.
The result of evaluating the <a data-cite="RML-Core#dfn-iterator">iterator</a> against the [=CSV value=] that is the <a data-cite="RML-Core#dfn-data-source">data source</a> is a [=CSV row=] of the [=CSV table=].

The [=CSV row=] that is the result of evaluating the <a data-cite="RML-Core#dfn-iterator">iterator</a> MUST be used to generate the <a data-cite="RML-Core#dfn-logical-iteration">logical iterations</a> for the <a data-cite="RML-Core#dfn-logical-source">logical source</a>. Each [=CSV column=] in the [=CSV row=] becomes a new [=CSV value=] which MUST be used as the context for the evaluation of the <a data-cite="RML-Core#dfn-expression">expression</a> associated with the <a data-cite="RML-Core#dfn-logical-source">logical source</a>. The order of the [=CSV rows=] of a [=CSV Table=] MUST be preserved in the logical iterations.

## Expressions

An <a data-cite="RML-Core#dfn-expression">expression</a> for <a data-cite="RML-Core#dfn-expression-map">expression maps</a> associated with a <a data-cite="RML-Core#dfn-logical-source">logical source</a> with the [=CSV reference formulation=] SHOULD be expressed as [=CSV column=] names of a [=CSV row=].

An <a data-cite="RML-Core#dfn-expression">expression</a> is evaluated against a <a data-cite="RML-Core#dfn-logical-iteration">logical iteration</a> which is a [=CSV value=].
The result of evaluating the <a data-cite="RML-Core#dfn-expression">expression</a> is a [=CSV row=], which MUST be transformed to a list of [=CSV values=] that forms the <a data-cite="RML-Core#dfn-expression-evaluation-result">expression evaluation result</a>. The order of the [=CSV row=] MUST be preserved in the <a data-cite="RML-Core#dfn-expression-evaluation-result">expression evaluation result</a>.

## CSV derivates

CSVW allows to specify how a CSV should be parsed and read in terms of NULL values, separator, encoding, etc.
These CSVW properties must be used by the engine to correctly read the CSV file.

```
<CSVWTable> a csvw:Table;
  csvw:separator ";";
  csvw:null "";
  csvw:encoding "utf-16";
.
```
