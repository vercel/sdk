# ThreeHundredAndForty

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndForty } from "@vercel/sdk/models/twohundredandseventyone.js";

let value: ThreeHundredAndForty = {
  max: 4639.91,
  min: 8645.27,
  scalingRules: {
    "key": {
      max: 7732.79,
      min: 2712.29,
    },
  },
  url: "https://impeccable-step-mother.name/",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `max`                                                            | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `min`                                                            | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `scalingRules`                                                   | Record<string, [models.ScalingRules](../models/scalingrules.md)> | :heavy_check_mark:                                               | N/A                                                              |
| `url`                                                            | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |