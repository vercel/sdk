# OneHundredAndThirtyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndThirtyNine } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndThirtyNine = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {},
  next: {},
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `projectId`                              | *string*                                 | :heavy_check_mark:                       | N/A                                      |
| `projectName`                            | *string*                                 | :heavy_check_mark:                       | N/A                                      |
| `previous`                               | [models.Previous](../models/previous.md) | :heavy_check_mark:                       | N/A                                      |
| `next`                                   | [models.Next](../models/next.md)         | :heavy_check_mark:                       | N/A                                      |