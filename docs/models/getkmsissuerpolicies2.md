# GetKmsIssuerPolicies2

## Example Usage

```typescript
import { GetKmsIssuerPolicies2 } from "@vercel/sdk/models/getkmsissuerop.js";

let value: GetKmsIssuerPolicies2 = {
  kind: "connex-grant",
  clientId: "<id>",
  createdAt: "1731780248905",
  updatedAt: "1735628487423",
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `kind`                | *"connex-grant"*      | :heavy_check_mark:    | N/A                   |
| `clientId`            | *string*              | :heavy_check_mark:    | N/A                   |
| `tokenClaims`         | Record<string, *any*> | :heavy_minus_sign:    | N/A                   |
| `createdAt`           | *string*              | :heavy_check_mark:    | N/A                   |
| `updatedAt`           | *string*              | :heavy_check_mark:    | N/A                   |