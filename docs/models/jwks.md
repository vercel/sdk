# Jwks

Inline authorization server JSON Web Key Set.

## Example Usage

```typescript
import { Jwks } from "@vercel/sdk/models/connectconnectorcreatedata.js";

let value: Jwks = {
  keys: [
    {
      kty: "<value>",
    },
  ],
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `keys`                                               | [models.Keys](../models/keys.md)[]                   | :heavy_check_mark:                                   | JSON Web Keys published by the authorization server. |
| `additionalProperties`                               | Record<string, *any*>                                | :heavy_minus_sign:                                   | N/A                                                  |