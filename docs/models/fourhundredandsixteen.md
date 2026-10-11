# FourHundredAndSixteen

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSixteen } from "@vercel/sdk/models/usereventpayload373previous.js";

let value: FourHundredAndSixteen = {
  plan: "pro",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `plan`                                                           | [models.UserEventPayloadPlan](../models/usereventpayloadplan.md) | :heavy_check_mark:                                               | N/A                                                              |
| `trial`                                                          | [models.Trial](../models/trial.md)                               | :heavy_minus_sign:                                               | N/A                                                              |