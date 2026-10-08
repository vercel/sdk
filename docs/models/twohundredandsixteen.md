# TwoHundredAndSixteen

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSixteen } from "@vercel/sdk/models/lasteditedbyprincipal2.js";

let value: TwoHundredAndSixteen = {
  id: "<id>",
  prev: {
    fallbackEnvironment: "<value>",
    name: "<value>",
    slug: "<value>",
  },
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `enablePolyrepoBranchRouting`    | *boolean*                        | :heavy_minus_sign:               | N/A                              |
| `fallbackEnvironment`            | *string*                         | :heavy_minus_sign:               | N/A                              |
| `id`                             | *string*                         | :heavy_check_mark:               | N/A                              |
| `name`                           | *string*                         | :heavy_minus_sign:               | N/A                              |
| `prev`                           | [models.Prev](../models/prev.md) | :heavy_check_mark:               | N/A                              |
| `slug`                           | *string*                         | :heavy_minus_sign:               | N/A                              |