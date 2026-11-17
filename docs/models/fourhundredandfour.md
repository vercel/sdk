# FourHundredAndFour

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFour } from "@vercel/sdk/models/threehundredandsixtysix.js";

let value: FourHundredAndFour = {
  budget: {
    createdAt: 4578.24,
    fixedBudget: 3682.95,
    id: "<id>",
    isActive: true,
    notifiedAt: [
      1568.25,
      4598.09,
      4062.44,
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
| `budget`                                                                   | [models.UserEventPayload404Budget](../models/usereventpayload404budget.md) | :heavy_check_mark:                                                         | Represents a budget for tracking and notifying teams on their spending.    |
| `projectId`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | Stored for project budgets. Same value as `budget.scopeId`.                |
| `projectName`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `scopeName`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | Stored when activity clients can't resolve the name, as for products.      |
| `webhookUrl`                                                               | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |