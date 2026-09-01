# ThreeHundredAndThirtyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndThirtyFour } from "@vercel/sdk/models/twohundredandseventyone.js";

let value: ThreeHundredAndThirtyFour = {
  budget: {
    budgetItem: {
      type: "fixed",
      fixedBudget: 9582.79,
      previousSpend: [
        3671.73,
        7939.42,
        1207.07,
      ],
      notifiedAt: [
        7090.83,
      ],
      createdAt: 1626.44,
      isActive: true,
      teamId: "<id>",
      id: "<id>",
    },
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload334Budget](../models/usereventpayload334budget.md) | :heavy_check_mark:                                                         | N/A                                                                        |