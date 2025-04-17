# OneHundredAndThirtySix

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndThirtySix } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndThirtySix = {
  id: "<id>",
  slug: "<value>",
  name: "<value>",
  prev: {
    name: "<value>",
    slug: "<value>",
  },
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `id`                             | *string*                         | :heavy_check_mark:               | N/A                              |
| `slug`                           | *string*                         | :heavy_check_mark:               | N/A                              |
| `name`                           | *string*                         | :heavy_check_mark:               | N/A                              |
| `prev`                           | [models.Prev](../models/prev.md) | :heavy_check_mark:               | N/A                              |