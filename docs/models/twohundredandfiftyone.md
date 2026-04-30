# TwoHundredAndFiftyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFiftyOne } from "@vercel/sdk/models/oldoptionsallowlist.js";

let value: TwoHundredAndFiftyOne = {
  budget: {
    type: "fixed",
    fixedBudget: 8504.33,
    previousSpend: [
      4824.74,
    ],
    notifiedAt: [
      204.49,
      4022.13,
    ],
    createdAt: 5014.89,
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