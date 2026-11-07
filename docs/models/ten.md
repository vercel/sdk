# Ten

The payload of the event, if requested.

## Example Usage

```typescript
import { Ten } from "@vercel/sdk/models/userevent.js";

let value: Ten = {
  namespace: "<value>",
  projectId: "<id>",
  projectName: "<value>",
  scheduleId: "<id>",
  scheduleName: "<value>",
  updatedFields: [],
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `namespace`                                          | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `projectId`                                          | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `projectName`                                        | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `scheduleId`                                         | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `scheduleName`                                       | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `updatedFields`                                      | [models.UpdatedFields](../models/updatedfields.md)[] | :heavy_check_mark:                                   | N/A                                                  |