# OneHundredAndEight

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEight } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndEight = {
  scalingRules: {},
  min: 1326.14,
  max: 9964.98,
  url: "https://shy-bug.biz",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `scalingRules`                                                   | Record<string, [models.ScalingRules](../models/scalingrules.md)> | :heavy_check_mark:                                               | N/A                                                              |
| `min`                                                            | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `max`                                                            | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `url`                                                            | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |