# Ten

The payload of the event, if requested.

## Example Usage

```typescript
import { Ten } from "@vercel/sdk/models/userevent.js";

let value: Ten = {
  next: {
    enabled: true,
    scope: "selected_repos",
    includeDrafts: true,
  },
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `previous`                               | [models.Previous](../models/previous.md) | :heavy_minus_sign:                       | Automatic code review settings           |
| `next`                                   | [models.Next](../models/next.md)         | :heavy_check_mark:                       | Automatic code review settings           |