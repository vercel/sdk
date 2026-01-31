# Nine

The payload of the event, if requested.

## Example Usage

```typescript
import { Nine } from "@vercel/sdk/models/userevent.js";

let value: Nine = {
  next: {
    enabled: true,
    scope: "public",
    includeDrafts: true,
  },
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `previous`                               | [models.Previous](../models/previous.md) | :heavy_minus_sign:                       | Automatic code review settings           |
| `next`                                   | [models.Next](../models/next.md)         | :heavy_check_mark:                       | Automatic code review settings           |