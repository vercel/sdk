# SeventyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { SeventyOne } from "@vercel/sdk/models/thirtyone.js";

let value: SeventyOne = {
  project: {
    id: "<id>",
    name: "<value>",
  },
  bulkRedirectsLimit: 5823,
  prevBulkRedirectsLimit: 1429.32,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `project`                                                              | [models.UserEventPayloadProject](../models/usereventpayloadproject.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `bulkRedirectsLimit`                                                   | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `prevBulkRedirectsLimit`                                               | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |