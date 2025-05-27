# OneHundredAndForty

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndForty } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndForty = {
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