# Policy3

## Example Usage

```typescript
import { Policy3 } from "@vercel/sdk/models/createkmsissuerop.js";

let value: Policy3 = {
  kind: "integration-tokens-grant",
  integrationId: "<id>",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `kind`                                                                  | *"integration-tokens-grant"*                                            | :heavy_check_mark:                                                      | N/A                                                                     |
| `integrationId`                                                         | *string*                                                                | :heavy_check_mark:                                                      | The marketplace integration ID for the integration tokens grant policy. |
| `tokenClaims`                                                           | Record<string, *any*>                                                   | :heavy_minus_sign:                                                      | The claims that KMS should include in signed JWTs for this policy.      |