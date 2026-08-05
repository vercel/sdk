# OneHundredAndEightyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEightyTwo } from "@vercel/sdk/models/onehundredandseventyone.js";

let value: OneHundredAndEightyTwo = {
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