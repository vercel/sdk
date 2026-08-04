# SixtyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { SixtyThree } from "@vercel/sdk/models/payloadresources.js";

let value: SixtyThree = {
  project: {
    id: "<id>",
    name: "<value>",
  },
  bulkRedirectsLimit: 8100.92,
  prevBulkRedirectsLimit: 2170.96,
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `project`                                            | [models.PayloadProject](../models/payloadproject.md) | :heavy_check_mark:                                   | N/A                                                  |
| `bulkRedirectsLimit`                                 | *number*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `prevBulkRedirectsLimit`                             | *number*                                             | :heavy_check_mark:                                   | N/A                                                  |