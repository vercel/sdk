# OneHundredAndThirteen

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndThirteen } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndThirteen = {
  scalingRules: {},
  min: 3940.4,
  max: 3268.08,
  url: "https://married-pressure.org",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `scalingRules`                                                   | Record<string, [models.ScalingRules](../models/scalingrules.md)> | :heavy_check_mark:                                               | N/A                                                              |
| `min`                                                            | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `max`                                                            | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `url`                                                            | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |