# TwoHundredAndFortyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFortyTwo } from "@vercel/sdk/models/onehundredandninetytwo.js";

let value: TwoHundredAndFortyTwo = {
  budget: {
    type: "fixed",
    fixedBudget: 1292.87,
    previousSpend: [
      4250.76,
      4279.01,
      3629.2,
    ],
    notifiedAt: [
      2313.74,
      3325.69,
      3043.02,
    ],
    createdAt: 8166.77,
    isActive: false,
    teamId: "<id>",
    id: "<id>",
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `budget`                                                                | [models.UserEventPayloadBudget](../models/usereventpayloadbudget.md)    | :heavy_check_mark:                                                      | Represents a budget for tracking and notifying teams on their spending. |
| `webhookUrl`                                                            | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |