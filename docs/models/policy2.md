# Policy2

## Example Usage

```typescript
import { Policy2 } from "@vercel/sdk/models/createkmsissuerop.js";

let value: Policy2 = {
  kind: "connex-grant",
  clientId: "<id>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `kind`                                                             | *"connex-grant"*                                                   | :heavy_check_mark:                                                 | N/A                                                                |
| `clientId`                                                         | *string*                                                           | :heavy_check_mark:                                                 | The Connex client ID for the Connex grant policy.                  |
| `tokenClaims`                                                      | Record<string, *any*>                                              | :heavy_minus_sign:                                                 | The claims that KMS should include in signed JWTs for this policy. |