# SeventyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { SeventyNine } from "@vercel/sdk/models/fiftyeight.js";

let value: SeventyNine = {
  bulkRedirectsLimit: 3193.54,
  prevBulkRedirectsLimit: 3187.48,
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