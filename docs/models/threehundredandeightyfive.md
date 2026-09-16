# ThreeHundredAndEightyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndEightyFive } from "@vercel/sdk/models/payloadmostspecificsubdivision.js";

let value: ThreeHundredAndEightyFive = {
  plan: "pro",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `plan`                                                           | [models.UserEventPayloadPlan](../models/usereventpayloadplan.md) | :heavy_check_mark:                                               | N/A                                                              |
| `trial`                                                          | [models.Trial](../models/trial.md)                               | :heavy_minus_sign:                                               | N/A                                                              |