# RevokeKmsSigningKeyPolicies2

## Example Usage

```typescript
import { RevokeKmsSigningKeyPolicies2 } from "@vercel/sdk/models/revokekmssigningkeyop.js";

let value: RevokeKmsSigningKeyPolicies2 = {
  kind: "connex-grant",
  clientId: "<id>",
  createdAt: "1712035044831",
  updatedAt: "1735670178477",
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