# Seventy

The payload of the event, if requested.

## Example Usage

```typescript
import { Seventy } from "@vercel/sdk/models/userevent.js";

let value: Seventy = {
  projectId: "<id>",
  restore: false,
  configVersion: 3188.99,
  configChangeCount: 9459.32,
  configChanges: [],
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