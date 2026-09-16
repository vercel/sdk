# CreateKmsIssuerPolicyResponseBody2

## Example Usage

```typescript
import { CreateKmsIssuerPolicyResponseBody2 } from "@vercel/sdk/models/createkmsissuerpolicyop.js";

let value: CreateKmsIssuerPolicyResponseBody2 = {
  clientId: "<id>",
  createdAt: "1735296461524",
  kind: "connex-grant",
  updatedAt: "1735681947388",
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