---
title: "@telemetry"
description: The @telemetry directive facilitates seamless integration with OpenTelemetry, enhancing the observability of your GraphQL services.
slug: ../telemetry-directive
---

The `@telemetry` directive facilitates seamless integration with [OpenTelemetry](https://open-telemetry.io), enhancing the observability of your GraphQL services powered by Tailcall. By leveraging this directive, developers gain access to valuable insights into the performance and behavior of their applications.

## Traces

Here are the traces that are captured by the `@telemetry` directive:

|                        Trace Name | Description                                                                                                                                                                                     |
| --------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                           request | Captures the span for processing the HTTP request on the server side, providing foundational observability.                                                                                     |
|                           graphQL | _Only for GraphQL ingress_. Span for processing GraphQL call                                                                                                                                    |
| `REST <http_method> <http_route>` | _Only for REST ingress_. Span for processing REST API call                                                                                                                                      |
|                    `<field_name>` | Denotes spans for fields with defined resolvers, offering insights into field names and execution times for resolver logic.                                                                     |
|                     `<expr_name>` | Nested within the `<field_name>` spans, these granulated spans detail the execution of expressions in resolving a field, highlighting the hierarchical execution pattern of nested expressions. |
|                  upstream_request | Request that were made from tailcall service to upstream                                                                                                                                        |

## Metrics

The `@telemetry` directive also captures the following metrics:

|                    Metric | Description                                                                                                                                     |
| ------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------- |
|            cache.hit_rate | Reflects the cache hit rate for the cache powered by the [`@cache`](./cache.md) directive                                                       |
| http.server.request.count | Counts the number of incoming requests made to specific route. Optionally enriched with selected headers by [`requestHeaders`](#requestheaders) |
| http.client.request.count | Counts the number of outgoing requests to specific upstream                                                                                     |

## export

The `export` field defines how the open-telemetry data should be exported and in which format. The following are the supported formats:

## otlp

Utilizes the OTLP format to export telemetry data to backend systems, supported by most modern tracing and analytics platforms. Here is an example using [honeycomb.io]:

[honecomb.io]: https://www.honeycomb.io/

```graphql
schema
  @telemetry(
    export: {
      otlp: {
        url: "https://api.honeycomb.io:443"
        headers: [
          {
            key: "x-honeycomb-team"
            value: "{{.env.HONEYCOMB_API_KEY}}"
          }
          {key: "x-honeycomb-dataset", value: "tailcall"}
        ]
      }
    }
  ) {
  query: Query
}
```

You can configure the OTLP exporter with the following options:

|   Field | Description                                                 |
| ------: | ----------------------------------------------------------- |
|     url | Defines the URL for the OTLP Collector.                     |
| headers | Sets additional headers for requests to the OTLP Collector. |

## prometheus

Facilitates metrics export in a Prometheus compatible format, providing a dedicated endpoint for metrics.

```graphql
schema
  @telemetry(export: {prometheus: {path: "/metrics"}}) {
  query: Query
}
```

You can configure the Prometheus exporter with the following options:

|  Field | Description                                                                        |
| -----: | ---------------------------------------------------------------------------------- |
|   path | Designates the endpoint path for Prometheus metrics, defaulting to `/metrics`.     |
| format | Controls the format viz. **text** or **protobuf**, for sending data to Prometheus. |

## stdout

Outputs all telemetry data to stdout, ideal for testing or local development environments.

```graphql
schema @telemetry(export: {stdout: {pretty: true}}) {
  query: Query
}
```

You can configure the stdout exporter with the following options:

|  Field | Description                                                          |
| -----: | -------------------------------------------------------------------- |
| pretty | Enables formatted output of telemetry data for enhanced readability. |

## requestHeaders

Specifies list of headers of ingress request the value of which will be sent to the telemetry as attributes.

```graphql
schema @telemetry(requestHeaders: ["X-User-Id"]) {
  query: Query
}
```

## apollo

Facilitates seamless integration with [Apollo Studio](https://studio.apollographql.com/), enhancing the observability of GraphQL services. By leveraging this field, developers gain access to valuable insights into the performance and behavior of their GraphQL APIs.

```graphql
schema
  @telemetry(
    export: {
      otlp: {
        api_key: "{{.env.APOLLO_API_KEY}}"
        graph_ref: "graph-id@current"
        platform: "website.com"
        version: "1.0.0"
      }
    }
  ) {
  query: Query
}
```

You can configure the apollo exporter with the following options:

|     Field | Description                                                                                                                                                   |
| --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   api_key | The API Key generated from Apollo Studio.                                                                                                                     |
| graph_ref | The Graph Ref, which is the `graph_id` and the `variant` concatenated using `@`(i.e. \<graph_id\>@\<variant\>)                                                |
|  platform | An arbitrary value which can contain the name of your website or some other value to identify your deployment uniqely, in case you have multiple deployments. |
|   version | Version of Apollo which is being used.                                                                                                                        |

By integrating the `@telemetry` directive into your GraphQL schema, you empower your development teams with critical insights into application performance, enabling proactive optimization and maintenance.
