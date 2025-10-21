# TEMPLATE Reference formulation

A <dfn>TEMPLATE reference formulation</dfn> (`rml:TEMPLATE`) is a
<a data-cite="RML-Core#dfn-reference-formulation">reference formulation</a> that
describes how to access data in a <a data-cite="RML-Core#dfn-data-source">data
source</a> in [[TEMPLATE]] format.

## Reference formulation identifier

The default TEMPLATE Reference Formulation is a
<a data-cite="RML-Core#dfn-reference-formulation">reference formulation</a>
identified with the IRI `rml:TEMPLATE`. It has no specific properties.

## Iterator

The <a data-cite="RML-Core#dfn-iterator">iterator</a> for
an <a data-cite="RML-Core#dfn-logical-source">abstract logical source</a> with the 
[=TEMPLATE reference formulation=] is always row-based over the [=TEMPLATE Table=] represented 
by the abstract logical source. 
The result of evaluating the <a data-cite="RML-Core#dfn-iterator">iterator</a>
against the <a data-cite="RML-Core#dfn-data-source">data source</a> in [[TEMPLATE]]
format MUST be a sequence of [[=TEMPLATE Iteration=]].
Consequently, one <a data-cite="RML-Core#dfn-iteration">logical iteration</a>
for an abstract logical source with [=TEMPLATE reference formulation=] MUST be a [=TEMPLATE Iteration=]. 
The order of the [=TEMPLATE Iteration=] in the input abstract logical source MUST be preserved in 
the logical iterations.

## Reference Expressions

<a data-cite="RML-Core#dfn-reference-expression">Reference expressions</a> inside
<a data-cite="RML-Core#dfn-expression-map">expression maps</a> associated with 
an <a data-cite="RML-Core#dfn-abstract-logical-source">abstract logical source</a> 
using the [=TEMPLATE reference formulation=] SHOULD be expressed as column names of a [=TEMPLATE Iteration=].

The result of evaluating a <a data-cite="RML-Core#dfn-reference-expression">reference expression</a> 
against a <a data-cite="RML-Core#dfn-iteration">logical iteration</a> 
(i.e., a [[=TEMPLATE Iteration=]]) is a [=TEMPLATE Value=]. 
This result MUST be transformed to a sequence of [=TEMPLATE values=], 
forming the
<a data-cite="RML-Core#dfn-expression-evaluation-result">expression evaluation result</a>. 

<aside class="note">
Since every [[=TEMPLATE Value=]] consists of a single data value, the expression
evaluation result will always be a singleton sequence of [[=TEMPLATE value=]]
</aside>

### Invalid Reference Expressions
An invalid <a data-cite="RML-Core#dfn-reference-expression">reference expression</a> 
is a <em>non-existent</em> column name of a [[=TEMPLATE Iteration=]]. 

Evaluating an invalid <a data-cite="RML-Core#dfn-reference-expression">reference expression</a> 
MUST generate a <em>NULL</em> value. 

## Generation of null values

Evaluation of a <a data-cite="RML-Core#dfn-reference-expression">reference expression</a>
<em>R</em> for <a data-cite="RML-Core#dfn-abstract-logical-source">abstract logical sources</a>
using [[=TEMPLATE reference formulation=]] results in <em>NULL</em> value for 
the following conditions: 

* <em>R</em> is <a href="#invalid-reference-expressions">invalid</a>. 


<aside class="note">
[[TEMPLATE]] does not have a default NULL token, so no value is considered NULL so
long as the aforementioned conditions are <em>not violated</em>. 
For example, given a [[=TEMPLATE Iteration=]] with a column name `firstName` containing an empty 
string `""` value. 
Evaluating a valid <a data-cite="RML-Core#dfn-reference-expression">reference expression</a> 
with the column name `firstName` will generate a [[=TEMPLATE Value=]] that is 
an <em>empty string</em>: `""`. 
</aside>

