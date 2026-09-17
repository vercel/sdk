# ThreeHundredAndFortySix

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFortySix } from "@vercel/sdk/models/payloadmostspecificsubdivision.js";

let value: ThreeHundredAndFortySix = {
  budget: {
    budgetItem: {
      createdAt: 9371.03,
      fixedBudget: 8606.07,
      id: "<id>",
      isActive: false,
      notifiedAt: [
        2423.52,
        7782.73,
      ],
      previousSpend: [
        397.47,
        9537.22,
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
| `budget`                                                                   | [models.UserEventPayload346Budget](../models/usereventpayload346budget.md) | :heavy_check_mark:                                                         | N/A                                                                        |