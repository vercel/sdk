# OneHundredAndFiftyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFiftyThree } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndFiftyThree = {
  budget: {
    type: "fixed",
    fixedBudget: 3424.02,
    previousSpend: [
      3063.44,
      1038.52,
      5249.18,
    ],
    notifiedAt: [
      7438.21,
    ],
    createdAt: 5231.73,
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