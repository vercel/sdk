# GetKmsIssuerPolicies2

## Example Usage

```typescript
import { GetKmsIssuerPolicies2 } from "@vercel/sdk/models/getkmsissuerop.js";

let value: GetKmsIssuerPolicies2 = {
  clientId: "<id>",
  createdAt: "1731780248905",
  kind: "connex-grant",
  updatedAt: "1735628487423",
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `clientId`            | *string*              | :heavy_check_mark:    | N/A                   |
| `createdAt`           | *string*              | :heavy_check_mark:    | N/A                   |
| `kind`                | *"connex-grant"*      | :heavy_check_mark:    | N/A                   |
| `tokenClaims`         | Record<string, *any*> | :heavy_minus_sign:    | N/A                   |
| `updatedAt`           | *string*              | :heavy_check_mark:    | N/A                   |