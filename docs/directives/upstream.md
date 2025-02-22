---
title: "@upstream"
description: The @upstream directive enables control over specific aspects of the upstream server connection.
slug: ../upstream-directive
---

The `upstream` directive enables control over specific aspects of the upstream server connection, including settings such as connection timeouts, keep-alive intervals, and more. The system applies default values if you do not specify them.

```graphql showLineNumbers
schema @upstream(...[UpstreamSetting]...){
    query: Query
    mutation: Mutation
}
```

The document below details the options for `UpstreamSetting`.

## poolIdleTimeout

The connection pool waits for this duration in seconds before closing idle connections.

```graphql showLineNumbers
schema @upstream(poolIdleTimeout: 60) {
  query: Query
  mutation: Mutation
}
```

## poolMaxIdlePerHost

The max number of idle connections each host will maintain.

```graphql showLineNumbers
schema @upstream(poolMaxIdlePerHost: 60) {
  query: Query
  mutation: Mutation
}
```

## keepAliveInterval

The time in seconds between each keep-alive message sent to maintain the connection.

```graphql showLineNumbers
schema @upstream(keepAliveInterval: 60) {
  query: Query
  mutation: Mutation
}
```

## keepAliveTimeout

The time in seconds that the connection will wait for a keep-alive message before closing.

```graphql showLineNumbers
schema @upstream(keepAliveTimeout: 60) {
  query: Query
  mutation: Mutation
}
```

## keepAliveWhileIdle

A boolean value that determines whether to send keep-alive messages while the connection is idle.

```graphql showLineNumbers
schema @upstream(keepAliveWhileIdle: false) {
  query: Query
  mutation: Mutation
}
```

## proxy

The `proxy` setting defines an intermediary server that routes upstream requests before they reach their intended endpoint. By specifying a proxy URL, you introduce a layer, enabling custom routing and security policies.

```graphql showLineNumbers
schema @upstream(proxy: {url: "http://localhost:3000"}) {
  query: Query
  mutation: Mutation
}
```

In the provided example, we've set the proxy's `url` to "http://localhost:3000". This configuration ensures that all requests aimed at the designated `url` first go through this proxy. To illustrate, if the `url` is "http://jsonplaceholder.typicode.com", any request targeting it initially goes to "http://localhost:3000" before the proxy redirects it to its final destination.

## connectTimeout

The time in seconds that the connection will wait for a response before timing out.

```graphql showLineNumbers
schema @upstream(connectTimeout: 60) {
  query: Query
  mutation: Mutation
}
```

## timeout

The max time in seconds that the connection will wait for a response.

```graphql showLineNumbers
schema @upstream(timeout: 60) {
  query: Query
  mutation: Mutation
}
```

## tcpKeepAlive

The time in seconds between each TCP keep-alive message sent to maintain the connection.

```graphql showLineNumbers
schema @upstream(tcpKeepAlive: 60) {
  query: Query
  mutation: Mutation
}
```

## userAgent

The User-Agent header value for HTTP requests.

```graphql showLineNumbers
schema @upstream(userAgent: "Tailcall/1.0") {
  query: Query
  mutation: Mutation
}
```

## allowedHeaders

The `allowedHeaders` configuration defines a set of whitelisted HTTP headers that can be forwarded to upstream services during requests.
Without specifying `allowedHeaders`, the system will not forward any incoming headers to upstream services, offering an extra security layer but potentially limiting necessary data flow. Tailcall compares the provided whitelisted headers in a case-insensitive format.

```graphql showLineNumbers
schema
  @upstream(
    allowedHeaders: ["Authorization", "X-Api-Key"]
  ) {
  query: Query
  mutation: Mutation
}
```

In the example above, the configuration for `allowedHeaders` permits `Authorization` and `X-Api-Key` headers. Thus, requests with these headers will forward them to upstream services; the system ignores all others. This configuration ensures communication of the expected headers to dependent services, emphasizing security and consistency.

## httpCache

When httpCache passed with value greater than 0 it directs Tailcall to use HTTP caching mechanisms, following the [HTTP Caching RFC](https://tools.ietf.org/html/rfc7234) to enhance performance by minimizing unnecessary data fetches. If left unspecified, this feature defaults to `0` disabling the caching mechanism.

```graphql showLineNumbers
schema @upstream(httpCache: 42) {
  query: Query
  mutation: Mutation
}
```

## Tips

- Use batching when other optimization techniques fail to resolve performance issues.
- Apply batching and thoroughly assess its impact.
- Understand that batching may make debugging more challenging.

## batch

An object that specifies the batch settings, including `maxSize` (the max size of the batch), `delay` (the delay in milliseconds between each batch), and `headers` (an array of HTTP headers that the batch will include).

```graphql showLineNumbers
schema
  @upstream(
    batch: {
      maxSize: 1000
      delay: 10
      headers: ["X-Server", "Authorization"]
    }
  ) {
  query: Query
  mutation: Mutation
}
```

## onRequest

Similar to the [@http](./http.md) property, this accepts a string value representing a middleware function defined in a JavaScript file. It intercepts all outgoing HTTP requests from the server. This interceptor, written in JavaScript, can be used to modify outgoing requests and also generate artificial responses to customize the behavior of the GraphQL server.

```graphql showLineNumbers
schema @upstream(onRequest: 'someFunctionName')
@link(type: Script, src: "path_to/worker.js") {
  query: Query
  mutation: Mutation
}
```
