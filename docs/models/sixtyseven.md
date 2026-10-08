# SixtySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { SixtySeven } from "@vercel/sdk/models/payloadscopes.js";

let value: SixtySeven = {
  appName: "<value>",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `appId`                                                        | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `appName`                                                      | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `permissions`                                                  | [models.PayloadPermissions](../models/payloadpermissions.md)[] | :heavy_minus_sign:                                             | N/A                                                            |
| `resources`                                                    | [models.Resources](../models/resources.md)                     | :heavy_minus_sign:                                             | N/A                                                            |