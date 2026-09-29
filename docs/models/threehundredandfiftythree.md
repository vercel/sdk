# ThreeHundredAndFiftyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFiftyThree } from "@vercel/sdk/models/twohundredandeightysix.js";

let value: ThreeHundredAndFiftyThree = {
  max: 8333.06,
  min: 9556.22,
  scalingRules: {},
  url: "https://limited-steeple.info/",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `max`                                                            | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `min`                                                            | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `scalingRules`                                                   | Record<string, [models.ScalingRules](../models/scalingrules.md)> | :heavy_check_mark:                                               | N/A                                                              |
| `url`                                                            | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |