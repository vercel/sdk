# TwoHundredAndFiftyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFiftyNine } from "@vercel/sdk/models/usereventpayload227next.js";

let value: TwoHundredAndFiftyNine = {
  budget: {
    type: "fixed",
    fixedBudget: 5966.87,
    previousSpend: [
      2432.12,
      3896.27,
    ],
    notifiedAt: [
      2783.17,
      680.08,
      9744.82,
    ],
    createdAt: 5527.9,
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