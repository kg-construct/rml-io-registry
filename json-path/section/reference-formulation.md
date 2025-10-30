# JSONPath Reference formulation

A <dfn>JSONPath reference formulation</dfn> (`rml:JSONPath`) is a
<a data-cite="RML-Core#dfn-reference-formulation">reference formulation</a> that
describes how to access data in a <a data-cite="RML-Core#dfn-abstract-logical-source">
abstract logical source</a> in [[JSON]] format.

## Reference formulation identifier

The default JSONPath Reference Formulation is a
<a data-cite="RML-Core#dfn-reference-formulation">reference formulation</a>
identified with the IRI `rml:JSONPath`. It has no specific properties.

## Iterator

The <a data-cite="RML-Core#dfn-iterator">iterator</a> for
an <a data-cite="RML-Core#dfn-logical-source">abstract logical source</a> with the 
[=JSONPath reference formulation=] is a [[JSONPath]] query.  
The result of evaluating the <a data-cite="RML-Core#dfn-iterator">iterator</a>
against the <a data-cite="RML-Core#dfn-data-source">data source</a> in [[JSONPath]]
format MUST be a [=JSONPath Nodelist=] (i.e., list of zero or more [=JSONPath Nodes=]).
Consequently, one <a data-cite="RML-Core#dfn-iteration">logical iteration</a>
for an abstract logical source with [=JSONPath reference formulation=] MUST be a [=JSONPath Node=]
which will be used as a [=JSONPath Root Node=] for the [reference
expressions](#reference-expressions). 
The order of the values in the [=JSONPath Nodelist=] in the input abstract logical
source MUST be preserved in the logical iterations.


## Reference Expressions

<a data-cite="RML-Core#dfn-reference-expression">Reference expressions</a> inside
<a data-cite="RML-Core#dfn-expression-map">expression maps</a> associated with 
an <a data-cite="RML-Core#dfn-abstract-logical-source">abstract logical source</a> 
using the [=JSONPath reference formulation=] SHOULD be expressed as
[[JSONPath]] queries.

The result of evaluating a [[JSONPath]] <a data-cite="RML-Core#dfn-reference-expression">reference expression</a> 
against a single <a data-cite="RML-Core#dfn-iteration">logical iteration</a> 
(i.e., a [[=JSONPath Root Node=]]) MUST be a sequence of [=JSON values=] which 
forms the 
<a data-cite="RML-Core#dfn-expression-evaluation-result">expression evaluation result</a>. 


### Invalid Reference Expressions
An invalid [[JSONPath]] <a data-cite="RML-Core#dfn-reference-expression">reference expression</a> 
is a [[JSONPath]] query that does not conform to the official specification of [[JSONPath]]. 
An invalid [[JSONPath]] query MUST be treated as an error and a conforming <a data-cite="RML-Core#dfn-rml-processor">RML processor</a>
MUST report the error to the agent invoking the <a data-cite="RML-Core#dfn-rml-processor">RML processor</a>. 

## Generation of null values

Evaluation of a valid [[JSONPath]] <a data-cite="RML-Core#dfn-reference-expression">reference expression</a>
<em>R</em> for <a data-cite="RML-Core#dfn-abstract-logical-source">abstract logical sources</a>
using [[=JSONPath reference formulation=]] results in <em>NULL</em> value for 
the following conditions: 

* JSONPath <em>R</em> refers to an actual [[JSON]] <em>null</em> value 
  (i.e., Evaluating <em>R</em> = "$.a" on a [[JSON]] value {"a": null}). 
* JSONPath <em>R</em> contains [=JSONPath segments=] which refers to non-existent children 
  of the input [=JSON value=]. 
* JSONPath <em>R</em> contains [=JSONPath selectors=] which refers to non-existent 
  [=JSON name=] of the input [=JSON value=].

