# FiftyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { FiftyEight } from "@vercel/sdk/models/userevent.js";

let value: FiftyEight = {
  projectId: "<id>",
  restore: true,
  configVersion: 2420.26,
  configChangeCount: 129.83,
  configChanges: [
    {},
  ],
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `projectId`                                          | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `restore`                                            | *boolean*                                            | :heavy_check_mark:                                   | N/A                                                  |
| `configVersion`                                      | *number*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `configChangeCount`                                  | *number*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `configChanges`                                      | [models.ConfigChanges](../models/configchanges.md)[] | :heavy_check_mark:                                   | N/A                                                  |