# XPath Reference formulation

A <dfn>XPath reference formulation</dfn> (`rml:XPath`) is a <a data-cite="RML-Core#dfn-reference-formulation">reference formulation</a> that describes how to access data in a <a data-cite="RML-Core#dfn-data-source">data source</a> in [[XML]] format.

## Reference formulation identifier

The default XPath Reference Formulation is a <a data-cite="RML-Core#dfn-reference-formulation">reference formulation</a> identified with the IRI `rml:XPath`. It has no specific properties.

## Iterator

The <a data-cite="RML-Core#dfn-iterator">iterator</a> for a <a data-cite="RML-Core#dfn-logical-source">logical source</a> with the [=XPath reference formulation=] SHOULD be expressed using XPath in accordance with [[XPath]].
The result of evaluating the <a data-cite="RML-Core#dfn-iterator">iterator</a> against the [=XML value=] that is the <a data-cite="RML-Core#dfn-data-source">data source</a> is a [=nodelist=] (i.e., a list of zero or more [=nodes=] of the [=value=]).

The [=nodelist=] that is the result of evaluating the <a data-cite="RML-Core#dfn-iterator">iterator</a> MUST be used to generate the <a data-cite="RML-Core#dfn-logical-iteration">logical iterations</a> for the <a data-cite="RML-Core#dfn-logical-source">logical source</a>. Each node in the [=nodelist=] becomes a new [=XML value=] which MUST be used as the context for the evaluation of the <a data-cite="RML-Core#dfn-expression">expression</a> associated with the <a data-cite="RML-Core#dfn-logical-source">logical source</a>. The order of the [=nodelist=] MUST be preserved in the logical iterations.

### Default iterator

The <a data-cite="RML-Core#dfn-default-iterator">default iterator</a>, if no <a data-cite="RML-Core#dfn-iterator">iterator</a> is specified for a <a data-cite="RML-Core#dfn-logical-source">logical source</a> with the [=XPath reference formulation=], MUST be the [=root node identifier=] `$`. This expression refers to the root node of the [=XML value=].

## Expressions

An <a data-cite="RML-Core#dfn-expression">expression</a> for <a data-cite="RML-Core#dfn-expression-map">expression maps</a> associated with a <a data-cite="RML-Core#dfn-logical-source">logical source</a> with the [=XPath reference formulation=] SHOULD be expressed using XPath in accordance with [[XPath]].

An <a data-cite="RML-Core#dfn-expression">expression</a> is evaluated against a <a data-cite="RML-Core#dfn-logical-iteration">logical iteration</a> which is a [=XML value=].
The result of evaluating the <a data-cite="RML-Core#dfn-expression">expression</a> is a [=nodelist=], which MUST be transformed to a list of [=XML values=] that forms the <a data-cite="RML-Core#dfn-expression-evaluation-result">expression evaluation result</a>. The order of the [=nodelist=] MUST be preserved in the <a data-cite="RML-Core#dfn-expression-evaluation-result">expression evaluation result</a>.
