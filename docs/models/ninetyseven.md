# NinetySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetySeven } from "@vercel/sdk/models/userevent.js";

let value: NinetySeven = {
  scalingRules: {
    "key": {
      min: 4466.53,
      max: 1518.84,
    },
  },
  min: 8866.64,
  max: 2316.51,
  url: "https://guilty-fort.net/",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `scalingRules`                                                   | Record<string, [models.ScalingRules](../models/scalingrules.md)> | :heavy_check_mark:                                               | N/A                                                              |
| `min`                                                            | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `max`                                                            | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `url`                                                            | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |