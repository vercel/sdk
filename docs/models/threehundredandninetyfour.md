# ThreeHundredAndNinetyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndNinetyFour } from "@vercel/sdk/models/consent.js";

let value: ThreeHundredAndNinetyFour = {
  budget: {
    createdAt: 1854.09,
    fixedBudget: 6103.99,
    id: "<id>",
    isActive: false,
    notifiedAt: [
      3775.43,
    ],
    previousSpend: [
      5977.39,
      6257.22,
      541.69,
    ],
    teamId: "<id>",
    type: "fixed",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload394Budget](../models/usereventpayload394budget.md) | :heavy_check_mark:                                                         | Represents a budget for tracking and notifying teams on their spending.    |
| `prevBudget`                                                               | [models.PrevBudget](../models/prevbudget.md)                               | :heavy_minus_sign:                                                         | Represents a budget for tracking and notifying teams on their spending.    |
| `prevWebhookUrl`                                                           | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `projectId`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | Stored for project budgets. Same value as `budget.scopeId`.                |
| `projectName`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | Injected at read time from `payload.projectId`.                            |
| `scopeName`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | Stored when activity clients can't resolve the name, as for products.      |
| `webhookUrl`                                                               | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |