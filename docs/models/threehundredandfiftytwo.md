# ThreeHundredAndFiftyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFiftyTwo } from "@vercel/sdk/models/payloadcity.js";

let value: ThreeHundredAndFiftyTwo = {
  budget: {
    budgetItem: {
      createdAt: 7668.85,
      fixedBudget: 5900.75,
      id: "<id>",
      isActive: true,
      notifiedAt: [
        7484.22,
        4354.37,
      ],
      previousSpend: [
        2833.33,
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
| `budget`                                                                   | [models.UserEventPayload352Budget](../models/usereventpayload352budget.md) | :heavy_check_mark:                                                         | N/A                                                                        |