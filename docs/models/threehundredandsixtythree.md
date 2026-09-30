# ThreeHundredAndSixtyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSixtyThree } from "@vercel/sdk/models/threehundredandfiftynine.js";

let value: ThreeHundredAndSixtyThree = {
  budget: {
    createdAt: 3892.1,
    fixedBudget: 5666.62,
    id: "<id>",
    isActive: false,
    notifiedAt: [
      8788.01,
      1890.18,
      995.97,
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
| `budget`                                                                   | [models.UserEventPayload363Budget](../models/usereventpayload363budget.md) | :heavy_check_mark:                                                         | Represents a budget for tracking and notifying teams on their spending.    |
| `projectId`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | Stored for project budgets. Same value as `budget.scopeId`.                |
| `projectName`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `webhookUrl`                                                               | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |