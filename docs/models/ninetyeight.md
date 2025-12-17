# NinetyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetyEight } from "@vercel/sdk/models/userevent.js";

let value: NinetyEight = {
  next: {
    project: {
      id: "<id>",
      staticIps: {
        enabled: false,
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