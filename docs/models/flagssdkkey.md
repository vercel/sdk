# FlagsSDKKey

## Example Usage

```typescript
import { FlagsSDKKey } from "@vercel/sdk/models/flagssdkkey.js";

let value: FlagsSDKKey = {
  hashKey: "<value>",
  projectId: "<id>",
  type: "server",
  environment: "<value>",
  createdBy: "<value>",
  createdAt: 9830.5,
  updatedAt: 3502.44,
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `hashKey`                                              | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `projectId`                                            | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `type`                                                 | [models.FlagsSDKKeyType](../models/flagssdkkeytype.md) | :heavy_check_mark:                                     | N/A                                                    |
| `environment`                                          | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `createdBy`                                            | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `createdAt`                                            | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `updatedAt`                                            | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `label`                                                | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `deletedAt`                                            | *number*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `keyValue`                                             | *string*                                               | :heavy_minus_sign:                                     | Cleartext value of the SDK key                         |
| `tokenValue`                                           | *string*                                               | :heavy_minus_sign:                                     | Cleartext value of the Edge Config token               |
| `connectionString`                                     | *string*                                               | :heavy_minus_sign:                                     | Connection string for the SDK                          |