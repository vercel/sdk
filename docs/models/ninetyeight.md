# NinetyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetyEight } from "@vercel/sdk/models/allowlistedreadystatereasoninternal.js";

let value: NinetyEight = {
  bulkRedirectsLimit: 9632.55,
  prevBulkRedirectsLimit: 6804.15,
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