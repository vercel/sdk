# ThreeHundredAndSeventyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSeventyThree } from "@vercel/sdk/models/threehundredandsixtyeight.js";

let value: ThreeHundredAndSeventyThree = {
  budget: {
    createdAt: 3886.81,
    fixedBudget: 7963.8,
    id: "<id>",
    isActive: false,
    notifiedAt: [
      2330.43,
    ],
    previousSpend: [
      2147.78,
      4727.5,
      9415.62,
    ],
    teamId: "<id>",
    type: "fixed",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload373Budget](../models/usereventpayload373budget.md) | :heavy_check_mark:                                                         | Represents a budget for tracking and notifying teams on their spending.    |
| `projectId`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | Stored for project budgets. Same value as `budget.scopeId`.                |
| `projectName`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |