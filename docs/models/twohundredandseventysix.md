# TwoHundredAndSeventySix

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSeventySix } from "@vercel/sdk/models/consent.js";

let value: TwoHundredAndSeventySix = {
  scalingRules: {},
  min: 6745.17,
  max: 3427.25,
  url: "https://punctual-behest.com",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `scalingRules`                                                   | Record<string, [models.ScalingRules](../models/scalingrules.md)> | :heavy_check_mark:                                               | N/A                                                              |
| `min`                                                            | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `max`                                                            | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `url`                                                            | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |