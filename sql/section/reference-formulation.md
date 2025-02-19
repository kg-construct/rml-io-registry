# SQL Reference formulation

A <dfn>SQL reference formulation</dfn> (`rml:SQLQuery` or `rml:SQLTable`) is a <a data-cite="RML-Core#dfn-reference-formulation">reference formulation</a> that describes how to access data in a <a data-cite="RML-Core#dfn-data-source">data source</a> in [[SQL]] format.

## Reference formulation identifier

The default SQL Reference Formulation is a <a data-cite="RML-Core#dfn-reference-formulation">reference formulation</a> identified with the IRI `rml:SQLQuery`. It has no specific properties.
`rml:SQLTable` also exists which is a shortcut for `SELECT * FROM $table`. Processors convert this shortcut automatically to this SQL query with reference formulation `rml:SQLQuery`.

## Iterator

The <a data-cite="RML-Core#dfn-iterator">iterator</a> for a <a data-cite="RML-Core#dfn-logical-source">logical source</a> with the [=SQL reference formulation=] is always row-based over a table.
The result of evaluating the <a data-cite="RML-Core#dfn-iterator">iterator</a> against the [=SQL value=] that is the <a data-cite="RML-Core#dfn-data-source">data source</a> is a [=SQL row=] of the SQL table.

The [=SQL row=] that is the result of evaluating the <a data-cite="RML-Core#dfn-iterator">iterator</a> MUST be used to generate the <a data-cite="RML-Core#dfn-logical-iteration">logical iterations</a> for the <a data-cite="RML-Core#dfn-logical-source">logical source</a>. Each column in the [=SQL row=] becomes a new [=SQL value=] which MUST be used as the context for the evaluation of the <a data-cite="RML-Core#dfn-expression">expression</a> associated with the <a data-cite="RML-Core#dfn-logical-source">logical source</a>. The order of the [=SQL rows=] of a [=SQL Table=] MUST be preserved in the logical iterations.

## Expressions

An <a data-cite="RML-Core#dfn-expression">expression</a> for <a data-cite="RML-Core#dfn-expression-map">expression maps</a> associated with a <a data-cite="RML-Core#dfn-logical-source">logical source</a> with the [=SQL reference formulation=] MUST be expressed as column names of a [=SQL row=].

An <a data-cite="RML-Core#dfn-expression">expression</a> is evaluated against a <a data-cite="RML-Core#dfn-logical-iteration">logical iteration</a> which is a [=SQL value=].
The result of evaluating the <a data-cite="RML-Core#dfn-expression">expression</a> is an [=SQL row=], which MUST be transformed to a list of [=SQL values=] that forms the <a data-cite="RML-Core#dfn-expression-evaluation-result">expression evaluation result</a>. The order of the [=SQL row=] MUST be preserved in the <a data-cite="RML-Core#dfn-expression-evaluation-result">expression evaluation result</a>.
