# ListKmsIssuersPolicies2

## Example Usage

```typescript
import { ListKmsIssuersPolicies2 } from "@vercel/sdk/models/listkmsissuersop.js";

let value: ListKmsIssuersPolicies2 = {
  kind: "connex-grant",
  clientId: "<id>",
  createdAt: "1726880179496",
  updatedAt: "1735642028907",
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