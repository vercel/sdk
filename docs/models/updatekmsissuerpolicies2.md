# UpdateKmsIssuerPolicies2

## Example Usage

```typescript
import { UpdateKmsIssuerPolicies2 } from "@vercel/sdk/models/updatekmsissuerop.js";

let value: UpdateKmsIssuerPolicies2 = {
  kind: "connex-grant",
  clientId: "<id>",
  createdAt: "1726512642930",
  updatedAt: "1735645434867",
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