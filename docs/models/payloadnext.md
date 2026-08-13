# PayloadNext

## Example Usage

```typescript
import { PayloadNext } from "@vercel/sdk/models/microfrontends.js";

let value: PayloadNext = {
  roles: {},
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `default`                                                        | [models.PayloadDefault](../models/payloaddefault.md)             | :heavy_minus_sign:                                               | N/A                                                              |
| `roles`                                                          | Record<string, [models.PayloadRoles](../models/payloadroles.md)> | :heavy_check_mark:                                               | N/A                                                              |