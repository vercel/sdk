# TwoHundredAndSixtyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSixtyThree } from "@vercel/sdk/models/userevent.js";

let value: TwoHundredAndSixtyThree = {
  plan: "hobby",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `plan`                             | [models.Plan](../models/plan.md)   | :heavy_check_mark:                 | N/A                                |
| `trial`                            | [models.Trial](../models/trial.md) | :heavy_minus_sign:                 | N/A                                |