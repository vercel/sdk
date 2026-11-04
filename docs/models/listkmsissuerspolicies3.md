# ListKmsIssuersPolicies3

Lets the integration-tokens service sign marketplace resource tokens for one integration (`oac_…`).

## Example Usage

```typescript
import { ListKmsIssuersPolicies3 } from "@vercel/sdk/models/listkmsissuersop.js";

let value: ListKmsIssuersPolicies3 = {
  createdAt: "1707331009645",
  integrationId: "<id>",
  kind: "integration-tokens-grant",
  updatedAt: "1735614868926",
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `createdAt`                  | *string*                     | :heavy_check_mark:           | N/A                          |
| `integrationId`              | *string*                     | :heavy_check_mark:           | N/A                          |
| `kind`                       | *"integration-tokens-grant"* | :heavy_check_mark:           | N/A                          |
| `tokenClaims`                | Record<string, *any*>        | :heavy_minus_sign:           | N/A                          |
| `updatedAt`                  | *string*                     | :heavy_check_mark:           | N/A                          |