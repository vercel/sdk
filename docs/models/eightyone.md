# EightyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { EightyOne } from "@vercel/sdk/models/usereventpayload27provider.js";

let value: EightyOne = {
  appName: "<value>",
  nextScopes: [
    "openid",
  ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `appId`                                                  | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `appName`                                                | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `nextPermissions`                                        | [models.NextPermissions](../models/nextpermissions.md)[] | :heavy_minus_sign:                                       | N/A                                                      |
| `nextScopes`                                             | [models.NextScopes](../models/nextscopes.md)[]           | :heavy_check_mark:                                       | N/A                                                      |