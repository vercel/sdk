# FourHundredAndTwentySix

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndTwentySix } from "@vercel/sdk/models/usereventpayload385type.js";

let value: FourHundredAndTwentySix = {
  plan: "hobby",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `plan`                                                           | [models.UserEventPayloadPlan](../models/usereventpayloadplan.md) | :heavy_check_mark:                                               | N/A                                                              |
| `trial`                                                          | [models.Trial](../models/trial.md)                               | :heavy_minus_sign:                                               | N/A                                                              |