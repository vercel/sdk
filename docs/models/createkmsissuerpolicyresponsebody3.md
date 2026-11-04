# CreateKmsIssuerPolicyResponseBody3

Lets the integration-tokens service sign marketplace resource tokens for one integration (`oac_…`).

## Example Usage

```typescript
import { CreateKmsIssuerPolicyResponseBody3 } from "@vercel/sdk/models/createkmsissuerpolicyop.js";

let value: CreateKmsIssuerPolicyResponseBody3 = {
  createdAt: "1708679382639",
  integrationId: "<id>",
  kind: "integration-tokens-grant",
  updatedAt: "1735658281041",
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