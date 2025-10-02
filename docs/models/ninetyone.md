# NinetyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetyOne } from "@vercel/sdk/models/userevent.js";

let value: NinetyOne = {
  next: {
    project: {
      id: "<id>",
      staticIps: {
        enabled: true,
      },
    },
  },
  previous: {
    project: {
      id: "<id>",
      staticIps: {
        enabled: false,
      },
    },
  },
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `next`                                   | [models.Next](../models/next.md)         | :heavy_check_mark:                       | N/A                                      |
| `previous`                               | [models.Previous](../models/previous.md) | :heavy_check_mark:                       | N/A                                      |