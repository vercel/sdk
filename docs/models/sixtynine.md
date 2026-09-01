# SixtyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { SixtyNine } from "@vercel/sdk/models/piiredaction.js";

let value: SixtyNine = {
  project: {
    id: "<id>",
    name: "<value>",
  },
  bulkRedirectsLimit: 3231.05,
  prevBulkRedirectsLimit: 223.49,
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `project`                                            | [models.PayloadProject](../models/payloadproject.md) | :heavy_check_mark:                                   | N/A                                                  |
| `bulkRedirectsLimit`                                 | *number*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `prevBulkRedirectsLimit`                             | *number*                                             | :heavy_check_mark:                                   | N/A                                                  |