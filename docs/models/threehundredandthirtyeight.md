# ThreeHundredAndThirtyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndThirtyEight } from "@vercel/sdk/models/usereventpayloadgitprovider.js";

let value: ThreeHundredAndThirtyEight = {
  max: 1224.11,
  min: 2132.95,
  scalingRules: {},
  url: "https://unfit-stranger.com/",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `max`                                                            | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `min`                                                            | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `scalingRules`                                                   | Record<string, [models.ScalingRules](../models/scalingrules.md)> | :heavy_check_mark:                                               | N/A                                                              |
| `url`                                                            | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |