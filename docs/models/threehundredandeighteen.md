# ThreeHundredAndEighteen

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndEighteen } from "@vercel/sdk/models/threehundredandfour.js";

let value: ThreeHundredAndEighteen = {
  plan: "enterprise",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `plan`                             | [models.Plan](../models/plan.md)   | :heavy_check_mark:                 | N/A                                |
| `trial`                            | [models.Trial](../models/trial.md) | :heavy_minus_sign:                 | N/A                                |