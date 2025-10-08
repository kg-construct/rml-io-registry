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


## CSVW properties
CSVW provides metadata which helps in parsing the CSV in terms of NULL values, separator, encoding, etc.
These CSVW properties must be used by the engine to correctly parse the CSV file.
[[CSVW-Namespace]] vocabulary can be used to provide more metadata to help 
with parsing the CSV file.


### No headers
CSVW enables parsing CSV files without a header row.  
Parsing CSV files with `1..N` columns with `csv:header` set to `false` will 
produce a table with the column names "1" to "N" respectively.


Provided with the following input CSV file with 4 columns: 
<aside class="ex-input">
647,434244.172304,428652.920455
646,434546.276382,428380.451633
6212,434644.819095,428412.411432
651,434758.675879,428527.599874
650,434821.652431,428439.025039
...
</aside>

and the following RML mapping containing the CSVW reference formulation definitions for 
the aforementioned CSV file:
<aside class="ex-mapping">
<CSVWTable> a csvw:Table;
    csvw:null "";
    csvw:separator ";"; 
    csvw:dialect [
        csvw:header "false"^^xsd:boolean;
    ];
</aside>


It is the same as working with the following CSV table where the headers are 
named <b>"1", "2", "3", and "4"</b>: 
<aside class="ex-input">
1,2,3,4 #numbered header row
647,434244.172304,428652.920455
646,434546.276382,428380.451633
6212,434644.819095,428412.411432
651,434758.675879,428527.599874
650,434821.652431,428439.025039
...
</aside>



### Default properties
While the default reference formulation identifier (`rml:CSVW`) specifies the
use of the CSVW reference formulation, it does not by itself describe how to
parse a given CSV file.
To ensure consistent behaviour across implementations, a default set of CSVW
properties and corresponding values is defined.
These defaults provide a minimal, functional CSVW configuration suitable for
parsing standard CSV files in the absence of explicit definition of
CSVW properties.

<aside class="ex-mapping"> 
<CSVWTable> a csvw:Table;
    csvw:null "";
    csvw:separator ";"; 
    csvw:dialect [
        csvw:commentPrefix "#"; 
        csvw:trim "false"^^xsd:boolean; 
        csvw:header "true"^^xsd:boolean;
        csvw:delimiter ",";
        csvw:encoding "utf-8";
        csvw:skipBlankRows "false"^^xsd:boolean;
        csvw:skipColumns "0"^^xsd:integer;
        csvw:skipInitialSpace "false"^^xsd:boolean;
        csvw:skipRows "0"^^xsd:integer;
    ];
</aside>

