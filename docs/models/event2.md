# Event2

## Example Usage

```typescript
import { Event2 } from "@vercel/sdk/models/createeventop.js";

let value: Event2 = {
  type: "resource.updated",
  resourceId: "<id>",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `type`                                                           | [models.CreateEventEventType](../models/createeventeventtype.md) | :heavy_check_mark:                                               | N/A                                                              |
| `productId`                                                      | *string*                                                         | :heavy_minus_sign:                                               | Partner-provided product slug or id                              |
| `resourceId`                                                     | *string*                                                         | :heavy_check_mark:                                               | Partner provided resource ID                                     |