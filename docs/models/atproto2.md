# Atproto2

## Example Usage

```typescript
import { Atproto2 } from "@vercel/sdk/models/routesdestination.js";

let value: Atproto2 = {
  enabled: true,
  subscription: {
    collections: [],
    path: "/net",
  },
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `enabled`                                        | *true*                                           | :heavy_check_mark:                               | N/A                                              |
| `subscription`                                   | [models.Subscription](../models/subscription.md) | :heavy_check_mark:                               | N/A                                              |