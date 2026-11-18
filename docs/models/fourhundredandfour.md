# FourHundredAndFour

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFour } from "@vercel/sdk/models/threehundredandseventyfive.js";

let value: FourHundredAndFour = {
  max: 4578.24,
  min: 3682.95,
  scalingRules: {},
  url: "https://cuddly-in-joke.info",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `max`                                                            | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `min`                                                            | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `scalingRules`                                                   | Record<string, [models.ScalingRules](../models/scalingrules.md)> | :heavy_check_mark:                                               | N/A                                                              |
| `url`                                                            | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |