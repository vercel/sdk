# ThreeHundredAndSixtyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSixtyOne } from "@vercel/sdk/models/usereventpayload354geolocationnames.js";

let value: ThreeHundredAndSixtyOne = {
  budget: {
    createdAt: 4465.45,
    fixedBudget: 3419.62,
    id: "<id>",
    isActive: false,
    notifiedAt: [
      3755.11,
      3385.9,
      8751.49,
    ],
    previousSpend: [
      5604.16,
      8108.38,
      6821.31,
    ],
    teamId: "<id>",
    type: "fixed",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload361Budget](../models/usereventpayload361budget.md) | :heavy_check_mark:                                                         | Represents a budget for tracking and notifying teams on their spending.    |
| `projectId`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | Stored for project budgets. Same value as `budget.scopeId`.                |
| `projectName`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |