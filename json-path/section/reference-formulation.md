# JSONPath Reference formulation

A <dfn>JSONPath reference formulation</dfn> (`rml:JSONPathReferenceFormulation`) is a <a data-cite="RML-Core#dfn-reference-formulation">reference formulation</a> that describes how to access data in a <a data-cite="RML-Core#dfn-data-source">data source</a> in [[JSON]] format.

## Reference formulation identifier

The default JSONPath Reference Formulation is a <a data-cite="RML-Core#dfn-reference-formulation">reference formulation</a> identified with the IRI `rml:JSONPath`. It has no specific properties.

## Iterator

The <a data-cite="RML-Core#dfn-iterator">iterator</a> for a <a data-cite="RML-Core#dfn-logical-source">logical source</a> with the [=JSONPath reference formulation=] SHOULD be expressed using JSONPath in accordance with [[RFC9535]].
The result of evaluating the <a data-cite="RML-Core#dfn-iterator">iterator</a> against the [=JSON value=] that is the <a data-cite="RML-Core#dfn-data-source">data source</a> is a [=nodelist=] (i.e., a list of zero or more [=nodes=] of the [=value=]).

The [=nodelist=] that is the result of evaluating the <a data-cite="RML-Core#dfn-iterator">iterator</a> MUST be used to generate the <a data-cite="RML-Core#dfn-logical-iteration">logical iterations</a> for the <a data-cite="RML-Core#dfn-logical-source">logical source</a>. Each node in the [=nodelist=] becomes a new [=JSON value=] which MUST be used as the context for the evaluation of the <a data-cite="RML-Core#dfn-expression">expression</a> associated with the <a data-cite="RML-Core#dfn-logical-source">logical source</a>. The order of the [=nodelist=] MUST be preserved in the logical iterations.

### Default iterator

The <a data-cite="RML-Core#dfn-default-iterator">default iterator</a>, if no <a data-cite="RML-Core#dfn-iterator">iterator</a> is specified for a <a data-cite="RML-Core#dfn-logical-source">logical source</a> with the [=JSONPath reference formulation=], MUST be the [=root node identifier=] `$`. This expression refers to the root node of the [=JSON value=].

## Expressions

An <a data-cite="RML-Core#dfn-expression">expression</a> for <a data-cite="RML-Core#dfn-expression-map">expression maps</a> associated with a <a data-cite="RML-Core#dfn-logical-source">logical source</a> with the [=JSONPath reference formulation=] SHOULD be expressed using JSONPath in accordance with [[RFC9535]].

An <a data-cite="RML-Core#dfn-expression">expression</a> is evaluated against a <a data-cite="RML-Core#dfn-logical-iteration">logical iteration</a> which is a [=JSON value=].
The result of evaluating the <a data-cite="RML-Core#dfn-expression">expression</a> is a [=nodelist=], which MUST be transformed to a list of [=JSON values=] that forms the <a data-cite="RML-Core#dfn-expression-evaluation-result">expression evaluation result</a>. The order of the [=nodelist=] MUST be preserved in the <a data-cite="RML-Core#dfn-expression-evaluation-result">expression evaluation result</a>.

### Handling absence of values in JSON data  

The result of evaluating an <a data-cite="RML-Core#dfn-expression">expression</a> with a
non-existent JSONPath in the input JSON data is a NULL value.
