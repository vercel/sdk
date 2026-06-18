# TwoHundredAndEightyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndEightyTwo } from "@vercel/sdk/models/reasoncode.js";

let value: TwoHundredAndEightyTwo = {
  budget: {
    type: "fixed",
    fixedBudget: 6756.02,
    previousSpend: [],
    notifiedAt: [
      651.29,
    ],
    createdAt: 7359.3,
    isActive: false,
    teamId: "<id>",
    id: "<id>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload282Budget](../models/usereventpayload282budget.md) | :heavy_check_mark:                                                         | Represents a budget for tracking and notifying teams on their spending.    |
| `webhookUrl`                                                               | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |