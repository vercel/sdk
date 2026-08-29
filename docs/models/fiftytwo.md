# FiftyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { FiftyTwo } from "@vercel/sdk/models/twentysix.js";

let value: FiftyTwo = {
  appName: "<value>",
  nextScopes: [],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `appName`                                                | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `appId`                                                  | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `nextScopes`                                             | [models.NextScopes](../models/nextscopes.md)[]           | :heavy_check_mark:                                       | N/A                                                      |
| `nextPermissions`                                        | [models.NextPermissions](../models/nextpermissions.md)[] | :heavy_minus_sign:                                       | N/A                                                      |