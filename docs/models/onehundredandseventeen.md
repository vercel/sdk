# OneHundredAndSeventeen

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSeventeen } from "@vercel/sdk/models/job6.js";

let value: OneHundredAndSeventeen = {
  projectId: "<id>",
  restore: false,
  configVersion: 4642.56,
  configChangeCount: 1728.94,
  configChanges: [],
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