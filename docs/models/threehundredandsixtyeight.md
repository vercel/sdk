# ThreeHundredAndSixtyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSixtyEight } from "@vercel/sdk/models/threehundredandsixtytwo.js";

let value: ThreeHundredAndSixtyEight = {
  budget: {
    createdAt: 8744.54,
    fixedBudget: 4846.84,
    id: "<id>",
    isActive: false,
    notifiedAt: [
      2270.13,
      1007.33,
      633.84,
    ],
    previousSpend: [
      7274.8,
      691.66,
    ],
    teamId: "<id>",
    type: "fixed",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload368Budget](../models/usereventpayload368budget.md) | :heavy_check_mark:                                                         | Represents a budget for tracking and notifying teams on their spending.    |
| `prevBudget`                                                               | [models.PrevBudget](../models/prevbudget.md)                               | :heavy_minus_sign:                                                         | Represents a budget for tracking and notifying teams on their spending.    |
| `prevWebhookUrl`                                                           | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `projectId`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | Stored for project budgets. Same value as `budget.scopeId`.                |
| `projectName`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | Injected at read time from `payload.projectId`.                            |
| `webhookUrl`                                                               | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |