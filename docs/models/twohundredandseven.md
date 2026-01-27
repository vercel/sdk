# TwoHundredAndSeven

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSeven } from "@vercel/sdk/models/userevent.js";

let value: TwoHundredAndSeven = {
  appName: "<value>",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `appName`                                                      | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `appId`                                                        | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `resources`                                                    | [models.Resources](../models/resources.md)                     | :heavy_minus_sign:                                             | N/A                                                            |
| `permissions`                                                  | [models.PayloadPermissions](../models/payloadpermissions.md)[] | :heavy_minus_sign:                                             | N/A                                                            |