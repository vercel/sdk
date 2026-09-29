# ThreeHundredAndSixtyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSixtyTwo } from "@vercel/sdk/models/usereventpayload354geolocationnames.js";

let value: ThreeHundredAndSixtyTwo = {
  budget: {
    createdAt: 5884.81,
    fixedBudget: 4950.76,
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
| `budget`                                                                   | [models.UserEventPayload362Budget](../models/usereventpayload362budget.md) | :heavy_check_mark:                                                         | Represents a budget for tracking and notifying teams on their spending.    |
| `prevBudget`                                                               | [models.PrevBudget](../models/prevbudget.md)                               | :heavy_minus_sign:                                                         | Represents a budget for tracking and notifying teams on their spending.    |
| `prevWebhookUrl`                                                           | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `projectId`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | Stored for project budgets. Same value as `budget.scopeId`.                |
| `projectName`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | Injected at read time from `payload.projectId`.                            |
| `webhookUrl`                                                               | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |