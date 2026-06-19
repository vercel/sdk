# FiftySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { FiftySeven } from "@vercel/sdk/models/fiftysix.js";

let value: FiftySeven = {
  project: {
    id: "<id>",
    name: "<value>",
  },
  bulkRedirectsLimit: 4103.29,
  prevBulkRedirectsLimit: 3819.19,
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `project`                                            | [models.PayloadProject](../models/payloadproject.md) | :heavy_check_mark:                                   | N/A                                                  |
| `bulkRedirectsLimit`                                 | *number*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `prevBulkRedirectsLimit`                             | *number*                                             | :heavy_check_mark:                                   | N/A                                                  |