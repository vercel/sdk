# TwoHundredAndNinetyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndNinetyFive } from "@vercel/sdk/models/payloadenvironment.js";

let value: TwoHundredAndNinetyFive = {
  plan: "hobby",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `plan`                             | [models.Plan](../models/plan.md)   | :heavy_check_mark:                 | N/A                                |
| `trial`                            | [models.Trial](../models/trial.md) | :heavy_minus_sign:                 | N/A                                |