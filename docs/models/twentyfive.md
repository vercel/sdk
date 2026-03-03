# TwentyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { TwentyFive } from "@vercel/sdk/models/userevent.js";

let value: TwentyFive = {
  project: {
    id: "<id>",
    name: "<value>",
  },
  bulkRedirectsLimit: 4187.62,
  prevBulkRedirectsLimit: 6238.03,
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `project`                                            | [models.PayloadProject](../models/payloadproject.md) | :heavy_check_mark:                                   | N/A                                                  |
| `bulkRedirectsLimit`                                 | *number*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `prevBulkRedirectsLimit`                             | *number*                                             | :heavy_check_mark:                                   | N/A                                                  |