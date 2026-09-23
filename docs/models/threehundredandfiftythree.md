# ThreeHundredAndFiftyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFiftyThree } from "@vercel/sdk/models/payloadcity.js";

let value: ThreeHundredAndFiftyThree = {
  budget: {
    budgetItem: {
      createdAt: 1320.6,
      fixedBudget: 8049.41,
      id: "<id>",
      isActive: true,
      notifiedAt: [
        4169.44,
        565.87,
        7853.9,
      ],
      previousSpend: [
        9153.58,
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
| `budget`                                                                   | [models.UserEventPayload353Budget](../models/usereventpayload353budget.md) | :heavy_check_mark:                                                         | N/A                                                                        |