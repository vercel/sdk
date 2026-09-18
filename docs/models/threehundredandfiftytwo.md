# ThreeHundredAndFiftyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFiftyTwo } from "@vercel/sdk/models/payloadcountry.js";

let value: ThreeHundredAndFiftyTwo = {
  budget: {
    createdAt: 3984.46,
    fixedBudget: 1904.75,
    id: "<id>",
    isActive: false,
    notifiedAt: [
      8551.32,
    ],
    previousSpend: [],
    teamId: "<id>",
    type: "fixed",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload352Budget](../models/usereventpayload352budget.md) | :heavy_check_mark:                                                         | Represents a budget for tracking and notifying teams on their spending.    |
| `prevBudget`                                                               | [models.PrevBudget](../models/prevbudget.md)                               | :heavy_minus_sign:                                                         | Represents a budget for tracking and notifying teams on their spending.    |
| `prevWebhookUrl`                                                           | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `webhookUrl`                                                               | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |