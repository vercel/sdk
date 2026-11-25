# OneHundredAndTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTwo } from "@vercel/sdk/models/usereventpayload82resourcestype.js";

let value: OneHundredAndTwo = {
  bulkRedirectsLimit: 3413.73,
  prevBulkRedirectsLimit: 3468.03,
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