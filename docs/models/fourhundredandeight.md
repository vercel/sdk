# FourHundredAndEight

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndEight } from "@vercel/sdk/models/threehundredandeightytwo.js";

let value: FourHundredAndEight = {
  max: 7370.95,
  min: 3301.31,
  scalingRules: {},
  url: "https://immediate-cheese.name",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `max`                                                            | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `min`                                                            | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `scalingRules`                                                   | Record<string, [models.ScalingRules](../models/scalingrules.md)> | :heavy_check_mark:                                               | N/A                                                              |
| `url`                                                            | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |