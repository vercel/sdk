# OneHundredAndEleven

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEleven } from "@vercel/sdk/models/jobdeployhook.js";

let value: OneHundredAndEleven = {
  projectId: "<id>",
  restore: false,
  configVersion: 5233.59,
  configChangeCount: 9559.84,
  configChanges: [
    {},
  ],
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `projectId`                                          | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `projectName`                                        | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `restore`                                            | *boolean*                                            | :heavy_check_mark:                                   | N/A                                                  |
| `configVersion`                                      | *number*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `configChangeCount`                                  | *number*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `configChanges`                                      | [models.ConfigChanges](../models/configchanges.md)[] | :heavy_check_mark:                                   | N/A                                                  |