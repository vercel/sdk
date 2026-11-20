# NinetyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetyNine } from "@vercel/sdk/models/usereventpayloadresources.js";

let value: NinetyNine = {
  bulkRedirectsLimit: 4084.8,
  prevBulkRedirectsLimit: 5082.46,
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