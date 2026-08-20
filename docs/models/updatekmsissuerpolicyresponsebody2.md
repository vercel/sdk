# UpdateKmsIssuerPolicyResponseBody2

## Example Usage

```typescript
import { UpdateKmsIssuerPolicyResponseBody2 } from "@vercel/sdk/models/updatekmsissuerpolicyop.js";

let value: UpdateKmsIssuerPolicyResponseBody2 = {
  kind: "connex-grant",
  clientId: "<id>",
  createdAt: "1732556119813",
  updatedAt: "1735618731581",
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