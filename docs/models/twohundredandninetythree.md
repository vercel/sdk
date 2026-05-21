# TwoHundredAndNinetyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndNinetyThree } from "@vercel/sdk/models/payloadenvironment.js";

let value: TwoHundredAndNinetyThree = {
  plan: "hobby",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `plan`                             | [models.Plan](../models/plan.md)   | :heavy_check_mark:                 | N/A                                |
| `trial`                            | [models.Trial](../models/trial.md) | :heavy_minus_sign:                 | N/A                                |