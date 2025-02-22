---
title: "@expr"
description: The @expr directive allows you to embed data directly into your schema.
slug: ../expr-directive
---

The `@expr` directive in GraphQL is a powerful tool for embedding data directly into your schema, offering two primary functionalities:

## Static

This feature allows for the inclusion of a constant response within the schema definition itself. It is useful for scenarios where the response is unchanging. e.g:

```graphql
schema {
  query: Query
}

type Query {
  user: User @expr(body: {name: "John", age: 12})
}

type User {
  name: String
  age: Int
}
```

The `@expr` directive also checks the provided value at compile time to ensure it matches the field's schema. If not, the console displays a descriptive error message.

## Dynamic

Beyond static data embedding, the `@expr` directive extends its utility to support dynamic data injection through Mustache template syntax. This feature enables the use of placeholders within the constant data, which are then dynamically replaced with actual values at runtime. It supports both scalar values and complex objects, including lists and nested objects, offering flexibility in tailoring responses to specific needs. e.g:

```graphql
schema {
  query: Query
}

type Query {
  user: User
    @expr(
      body: {
        name: "John"
        workEmail: "john@xyz.com"
        personalEmail: "john@xyz.com"
      }
    )
}

type User {
  name: String
  age: Int
  personalEmail: String
  workEmail: String
  emails: Emails
    @expr(
      body: {
        emails: {
          workEmail: "{{.value.workEmail}}"
          personalEmail: "{{.value.personalEmail}}"
        }
      }
    )
}

type Emails {
  workEmail: String
  personalEmail: String
}
```

In this example, the `@expr` directive dynamically generate an `Emails` object based on the provided template data. The placeholders within the template (`{{.value.workEmail}}` and `{{.value.personalEmail}}`) gets replaced with the actual values specified in the `User` type, allowing for dynamic content generation while still adhering to the schema's structure.
