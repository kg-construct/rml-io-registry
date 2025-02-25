# Access description

RML leverages `wot:Thing` for defining how a Web API or datastream can be accessed in a RML Logical Source's `rml:source`.
RML only uses the following properties of a `wot:Thing`:

- `td:hasPropertyAffordance`: Thing property.
- `td:hasForm`: the `hctl:Form` for access.

A `hctl:Form` contains the access description for the specific Web API or datastream, different description can
be used by using [WoT Binding Templates](https://www.w3.org/TR/wot-binding-templates/).

Example of a Web of Things HTTP API with a specific user agent and JSON data in a RML mapping:

```
<LogicalSource> a rml:LogicalSource;
    rml:source [ a rml:Source, td:Thing;
        td:hasPropertyAffordance [
            td:hasForm [
                # URL and content type
                hctl:hasTarget "http://localhost:4242/";
                hctl:forContentType "application/json";
                # Set HTTP method and headers through W3C WoT Binding Template for HTTP
                htv:methodName "GET";
                htv:headers ([
                    htv:fieldName "User-Agent";
                    htv:fieldValue "Processor";
                ]);
            ];
        ];
    ];
.
```

Example of a Web of Things HTTP API Server Sent Events (SSE) in a RML mapping:

```
<LogicalSource> a rml:LogicalSource;
    rml:source [ a rml:Source, td:Thing;
        td:hasPropertyAffordance [
            td:hasForm [
                # URL and content type
                hctl:hasTarget "http://localhost:4242/";
                hctl:forContentType "text/event-stream";
            ];
        ];
    ];
.
```

Example of a Web of Things TCP stream with JSON data in a RML mapping:

```
<LogicalSource> a rml:LogicalSource;
    rml:source [ a rml:Source, td:Thing;
        td:hasPropertyAffordance [
            td:hasForm [
                # URL and content type
                hctl:hasTarget "tcp://localhost:1234/topic";
                hctl:forContentType "application/json";
            ];
        ];
    ];
.
```

Example of a Web of Things MQTT stream in a RML mapping:

```
<LogicalSource> a rml:LogicalSource;
    rml:source [ a rml:Source, td:Thing;
        td:hasPropertyAffordance [
            td:hasForm [
                # URL and content type
                hctl:hasTarget "mqtt://localhost/topic";
                hctl:forContentType "application/json";
                # Set MQTT parameters through W3C WoT Binding Template for MQTT
                mqv:controlPacketValue "SUBSCRIBE";
                mqv:options ([ mqv:optionName "qos"; mqv:optionValue "1" ] [ mqv:optionName "dup" ]);
            ];
        ];
    ];
.
```

Example of a Web of Things Kafka stream in a RML mapping:

```
<LogicalSource> a rml:LogicalSource;
    rml:source [ a rml:Source, td:Thing;
        td:hasPropertyAffordance [
            td:hasForm [
                # URL and content type
                hctl:hasTarget "kafka://localhost:8089/topic";
                hctl:forContentType "application/xml";
                # Kafka parameters through W3C WoT Binding Template for Kafka
                kafka:groupId "MyAwesomeGroup";
            ];
        ];
    ];
.
```

<aside class="note informative">
Note: `mqv` and `kafka` prefixes are an example, no ontology exist yet for MQTT and Kafka data streams, but can be created using [WoT Binding Templates](https://www.w3.org/TR/wot-binding-templates/).

</aside>
