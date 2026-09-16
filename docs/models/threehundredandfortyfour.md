# ThreeHundredAndFortyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFortyFour } from "@vercel/sdk/models/payloadmostspecificsubdivision.js";

let value: ThreeHundredAndFortyFour = {
  budget: {
    budgetItem: {
      createdAt: 252.7,
      fixedBudget: 8822.54,
      id: "<id>",
      isActive: true,
      notifiedAt: [
        8822.88,
        2480.26,
      ],
      previousSpend: [],
      teamId: "<id>",
      type: "fixed",
    },
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload344Budget](../models/usereventpayload344budget.md) | :heavy_check_mark:                                                         | N/A                                                                        |