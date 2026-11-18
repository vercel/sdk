# FourHundredAndEleven

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndEleven } from "@vercel/sdk/models/threehundredandseventyfive.js";

let value: FourHundredAndEleven = {
  budget: {
    createdAt: 7880.72,
    fixedBudget: 5218.55,
    id: "<id>",
    isActive: false,
    notifiedAt: [
      3655.09,
      3977.17,
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
| `budget`                                                                   | [models.UserEventPayload411Budget](../models/usereventpayload411budget.md) | :heavy_check_mark:                                                         | Represents a budget for tracking and notifying teams on their spending.    |
| `projectId`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | Stored for project budgets. Same value as `budget.scopeId`.                |
| `projectName`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `scopeName`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | Stored when activity clients can't resolve the name, as for products.      |
| `webhookUrl`                                                               | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |