# ThreeHundredAndFortyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFortyNine } from "@vercel/sdk/models/twohundredandeightythree.js";

let value: ThreeHundredAndFortyNine = {
  max: 9263.75,
  min: 459.74,
  scalingRules: {
    "key": {
      max: 7732.79,
      min: 2712.29,
    },
  },
  url: "https://nervous-overcoat.biz",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `max`                                                            | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `min`                                                            | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `scalingRules`                                                   | Record<string, [models.ScalingRules](../models/scalingrules.md)> | :heavy_check_mark:                                               | N/A                                                              |
| `url`                                                            | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |