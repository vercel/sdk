# ThreeHundredAndThirty

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndThirty } from "@vercel/sdk/models/payloadfactors.js";

let value: ThreeHundredAndThirty = {
  budget: {
    type: "fixed",
    fixedBudget: 2152.14,
    previousSpend: [
      8306.05,
    ],
    notifiedAt: [],
    createdAt: 5941.51,
    isActive: false,
    teamId: "<id>",
    id: "<id>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload330Budget](../models/usereventpayload330budget.md) | :heavy_check_mark:                                                         | Represents a budget for tracking and notifying teams on their spending.    |
| `webhookUrl`                                                               | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |