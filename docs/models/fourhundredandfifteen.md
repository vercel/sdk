# FourHundredAndFifteen

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFifteen } from "@vercel/sdk/models/threehundredandeightytwo.js";

let value: FourHundredAndFifteen = {
  budget: {
    createdAt: 1411.16,
    fixedBudget: 2737.81,
    id: "<id>",
    isActive: true,
    notifiedAt: [],
    previousSpend: [],
    teamId: "<id>",
    type: "fixed",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload415Budget](../models/usereventpayload415budget.md) | :heavy_check_mark:                                                         | Represents a budget for tracking and notifying teams on their spending.    |
| `projectId`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | Stored for project budgets. Same value as `budget.scopeId`.                |
| `projectName`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `scopeName`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | Stored when activity clients can't resolve the name, as for products.      |
| `webhookUrl`                                                               | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |