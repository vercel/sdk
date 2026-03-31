# Forty

The payload of the event, if requested.

## Example Usage

```typescript
import { Forty } from "@vercel/sdk/models/forty.js";

let value: Forty = {
  project: {
    id: "<id>",
    name: "<value>",
  },
  bulkRedirectsLimit: 889.92,
  prevBulkRedirectsLimit: 4974.09,
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `project`                                            | [models.PayloadProject](../models/payloadproject.md) | :heavy_check_mark:                                   | N/A                                                  |
| `bulkRedirectsLimit`                                 | *number*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `prevBulkRedirectsLimit`                             | *number*                                             | :heavy_check_mark:                                   | N/A                                                  |