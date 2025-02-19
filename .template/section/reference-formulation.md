# TEMPLATE Reference formulation

A <dfn>TEMPLATE reference formulation</dfn> (`rml:TEMPLATEReferenceFormulation`) is a <a data-cite="RML-Core#dfn-reference-formulation">reference formulation</a> that describes how to access data in a <a data-cite="RML-Core#dfn-data-source">data source</a> in [[TEMPLATE]] format.

## Reference formulation identifier

The default TEMPLATE Reference Formulation is a <a data-cite="RML-Core#dfn-reference-formulation">reference formulation</a> identified with the IRI `rml:TEMPLATE`. It has no specific properties.

## Iterator

The <a data-cite="RML-Core#dfn-iterator">iterator</a> for a <a data-cite="RML-Core#dfn-logical-source">logical source</a> with the [=TEMPLATE reference formulation=] SHOULD be expressed using TEMPLATE in accordance with [[RFC9535]].
The result of evaluating the <a data-cite="RML-Core#dfn-iterator">iterator</a> against the [=TEMPLATE value=] that is the <a data-cite="RML-Core#dfn-data-source">data source</a> is a [=TEMPLATE iterable value=].

The [=TEMPLATE iterable value=] that is the result of evaluating the <a data-cite="RML-Core#dfn-iterator">iterator</a> MUST be used to generate the <a data-cite="RML-Core#dfn-logical-iteration">logical iterations</a> for the <a data-cite="RML-Core#dfn-logical-source">logical source</a>. Each node in the [=nodelist=] becomes a new [=TEMPLATE value=] which MUST be used as the context for the evaluation of the <a data-cite="RML-Core#dfn-expression">expression</a> associated with the <a data-cite="RML-Core#dfn-logical-source">logical source</a>. The order of the [=TEMPLATE iterable value=] MUST be preserved in the logical iterations.

### Default iterator

The <a data-cite="RML-Core#dfn-default-iterator">default iterator</a>, if no <a data-cite="RML-Core#dfn-iterator">iterator</a> is specified for a <a data-cite="RML-Core#dfn-logical-source">logical source</a> with the [=TEMPLATE reference formulation=], MUST be the [=root node identifier=] `$`. This expression refers to the root node of the [=TEMPLATE value=].

## Expressions

An <a data-cite="RML-Core#dfn-expression">expression</a> for <a data-cite="RML-Core#dfn-expression-map">expression maps</a> associated with a <a data-cite="RML-Core#dfn-logical-source">logical source</a> with the [=TEMPLATE reference formulation=] SHOULD be expressed using TEMPLATE in accordance with [[RFC9535]].

An <a data-cite="RML-Core#dfn-expression">expression</a> is evaluated against a <a data-cite="RML-Core#dfn-logical-iteration">logical iteration</a> which is a [=TEMPLATE value=].
The result of evaluating the <a data-cite="RML-Core#dfn-expression">expression</a> is a [=nodelist=], which MUST be transformed to a list of [=TEMPLATE values=] that forms the <a data-cite="RML-Core#dfn-expression-evaluation-result">expression evaluation result</a>. The order of the [=nodelist=] MUST be preserved in the <a data-cite="RML-Core#dfn-expression-evaluation-result">expression evaluation result</a>.
