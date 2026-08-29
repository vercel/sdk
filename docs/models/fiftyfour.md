# FiftyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { FiftyFour } from "@vercel/sdk/models/twentysix.js";

let value: FiftyFour = {
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