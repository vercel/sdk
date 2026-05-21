# OneHundredAndEighteen

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEighteen } from "@vercel/sdk/models/usereventpayload80deployment.js";

let value: OneHundredAndEighteen = {
  projectId: "<id>",
  restore: false,
  configVersion: 6523.16,
  configChangeCount: 2952.01,
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