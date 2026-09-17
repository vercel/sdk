# ThreeHundredAndEightySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndEightySeven } from "@vercel/sdk/models/payloadmostspecificsubdivision.js";

let value: ThreeHundredAndEightySeven = {
  plan: "enterprise",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `plan`                                                           | [models.UserEventPayloadPlan](../models/usereventpayloadplan.md) | :heavy_check_mark:                                               | N/A                                                              |
| `trial`                                                          | [models.Trial](../models/trial.md)                               | :heavy_minus_sign:                                               | N/A                                                              |