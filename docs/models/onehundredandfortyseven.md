# OneHundredAndFortySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFortySeven } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndFortySeven = {
  id: "<id>",
  prev: {
    name: "<value>",
    slug: "<value>",
    fallbackEnvironment: "<value>",
  },
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `id`                             | *string*                         | :heavy_check_mark:               | N/A                              |
| `slug`                           | *string*                         | :heavy_minus_sign:               | N/A                              |
| `name`                           | *string*                         | :heavy_minus_sign:               | N/A                              |
| `fallbackEnvironment`            | *string*                         | :heavy_minus_sign:               | N/A                              |
| `prev`                           | [models.Prev](../models/prev.md) | :heavy_check_mark:               | N/A                              |