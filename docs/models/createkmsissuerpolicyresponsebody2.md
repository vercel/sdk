# CreateKmsIssuerPolicyResponseBody2

## Example Usage

```typescript
import { CreateKmsIssuerPolicyResponseBody2 } from "@vercel/sdk/models/createkmsissuerpolicyop.js";

let value: CreateKmsIssuerPolicyResponseBody2 = {
  kind: "connex-grant",
  clientId: "<id>",
  createdAt: "1735296461524",
  updatedAt: "1735681947388",
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