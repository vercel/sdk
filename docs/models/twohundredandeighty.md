# TwoHundredAndEighty

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndEighty } from "@vercel/sdk/models/reasoncode.js";

let value: TwoHundredAndEighty = {
  budget: {
    budgetItem: {
      type: "fixed",
      fixedBudget: 5322.24,
      previousSpend: [],
      notifiedAt: [
        7813.67,
        6171.37,
      ],
      createdAt: 7480.89,
      isActive: true,
      teamId: "<id>",
      id: "<id>",
    },
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `budget`                                                             | [models.UserEventPayloadBudget](../models/usereventpayloadbudget.md) | :heavy_check_mark:                                                   | N/A                                                                  |