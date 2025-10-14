# ClientAuthenticationUsed

## Example Usage

```typescript
import { ClientAuthenticationUsed } from "@vercel/sdk/models/userevent.js";

let value: ClientAuthenticationUsed = {
  method: "private_key_jwt",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `method`                             | [models.Method](../models/method.md) | :heavy_check_mark:                   | N/A                                  |
| `secretId`                           | *string*                             | :heavy_minus_sign:                   | N/A                                  |