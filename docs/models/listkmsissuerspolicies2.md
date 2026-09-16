# ListKmsIssuersPolicies2

## Example Usage

```typescript
import { ListKmsIssuersPolicies2 } from "@vercel/sdk/models/listkmsissuersop.js";

let value: ListKmsIssuersPolicies2 = {
  clientId: "<id>",
  createdAt: "1726880179496",
  kind: "connex-grant",
  updatedAt: "1735642028907",
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