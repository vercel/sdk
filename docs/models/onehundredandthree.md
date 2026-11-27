# OneHundredAndThree

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndThree } from "@vercel/sdk/models/eightythree.js";

let value: OneHundredAndThree = {
  bulkRedirectsLimit: 7025.9,
  prevBulkRedirectsLimit: 7095.53,
  project: {
    id: "<id>",
    name: "<value>",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `bulkRedirectsLimit`                                                   | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `prevBulkRedirectsLimit`                                               | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `project`                                                              | [models.UserEventPayloadProject](../models/usereventpayloadproject.md) | :heavy_check_mark:                                                     | N/A                                                                    |