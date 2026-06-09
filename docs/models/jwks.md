# Jwks

## Example Usage

```typescript
import { Jwks } from "@vercel/sdk/models/createconnectorop.js";

let value: Jwks = {
  keys: [
    {
      kty: "<value>",
    },
  ],
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `keys`                             | [models.Keys](../models/keys.md)[] | :heavy_check_mark:                 | N/A                                |
| `additionalProperties`             | Record<string, *any*>              | :heavy_minus_sign:                 | N/A                                |