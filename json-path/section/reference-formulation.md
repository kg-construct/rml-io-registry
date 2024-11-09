# Reference formulation

A <dfn>JSONPath reference formulation</dfn> (`rml:JSONPathReferenceFormulation`) is a <a data-cite="RML-Core#dfn-reference-formulation">reference formulation</a> that describes how to access data in a <a data-cite="RML-Core#dfn-data-source">data source</a> in [[JSON]] format.

## Reference formulation identifier

The default JSONPath Reference Formulation is a reference formulation identified with the IRI `rml:JSONPath`. It has no specific properties.

## Iterator

The <a data-cite="RML-Core#dfn-iterator">iterator</a> for a <a data-cite="RML-Core#dfn-logical-source">logical source</a> with the [=JSONPath reference formulation=] is expressed using JSONPath [[rfc9535]].
The result of evaluating the <a data-cite="RML-Core#dfn-iterator">iterator</a> against the [=JSON value=] that is the <a data-cite="RML-Core#dfn-data-source">data source</a> is a [=nodelist=] (i.e., a list of zero or more [=nodes=] of the [=value=]).

The [=nodelist=] that is the result of evaluating the <a data-cite="RML-Core#dfn-iterator">iterator</a> is used to generate the <a data-cite="RML-Core#dfn-logical-iteration">logical iterations</a> for the <a data-cite="RML-Core#dfn-logical-source">logical source</a>. Each node in the [=nodelist=] becomes a new [=JSON value=] which can be used as the context for the evaluation of the <a data-cite="RML-Core#dfn-expression">expression</a> associated with the <a data-cite="RML-Core#dfn-logical-source">logical source</a>. The order of the [=nodelist=] is preserved in the logical iterations.

### Default iterator

The default iterator, if no <a data-cite="RML-Core#dfn-iterator">iterator</a> is specified for a <a data-cite="RML-Core#dfn-logical-source">logical source</a> with the [=JSONPath reference formulation=], is the [=root node identifier=] `$`. This expression refers to the root node of the [=JSON value=].

## Expressions

An <a data-cite="RML-Core#dfn-expression">expression</a> for <a data-cite="RML-Core#dfn-expression-map">expression maps</a> associated with a <a data-cite="RML-Core#dfn-logical-source">logical source</a> with the [=JSONPath reference formulation=] is expressed using JSONPath [[rfc9535]].

An expression is evaluated against a logical iteration which is a [=JSON value=].

