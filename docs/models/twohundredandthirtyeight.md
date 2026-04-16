# TwoHundredAndThirtyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndThirtyEight } from "@vercel/sdk/models/twohundredandthirtysix.js";

let value: TwoHundredAndThirtyEight = {
  budget: {
    type: "fixed",
    fixedBudget: 9292.23,
    previousSpend: [
      5092.01,
      7808.43,
    ],
    notifiedAt: [
      790.36,
      3891.69,
    ],
    createdAt: 3717.34,
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