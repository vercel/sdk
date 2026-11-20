# FourHundredAndTen

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndTen } from "@vercel/sdk/models/oldssoprotection2.js";

let value: FourHundredAndTen = {
  budget: {
    budgetItem: {
      createdAt: 6091.93,
      fixedBudget: 5022.96,
      id: "<id>",
      isActive: false,
      notifiedAt: [
        5110.69,
        6062.38,
        1999.65,
      ],
      previousSpend: [
        1319.54,
        7602.32,
      ],
      teamId: "<id>",
      type: "fixed",
    },
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload410Budget](../models/usereventpayload410budget.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `projectId`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | Stored for project budgets. Same value as `budget.scopeId`.                |
| `projectName`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |