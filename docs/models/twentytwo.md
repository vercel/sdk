# TwentyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { TwentyTwo } from "@vercel/sdk/models/userevent.js";

let value: TwentyTwo = {
  project: {
    id: "<id>",
    name: "<value>",
  },
  bulkRedirectsLimit: 9328.11,
  prevBulkRedirectsLimit: 3590.62,
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `project`                                            | [models.PayloadProject](../models/payloadproject.md) | :heavy_check_mark:                                   | N/A                                                  |
| `bulkRedirectsLimit`                                 | *number*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `prevBulkRedirectsLimit`                             | *number*                                             | :heavy_check_mark:                                   | N/A                                                  |