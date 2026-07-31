# ThreeHundredAndFourteen

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFourteen } from "@vercel/sdk/models/ssoprotectiondeploymenttype.js";

let value: ThreeHundredAndFourteen = {
  budget: {
    budgetItem: {
      type: "fixed",
      fixedBudget: 7060.5,
      previousSpend: [
        21.35,
      ],
      notifiedAt: [
        8593.19,
        6673.18,
      ],
      createdAt: 9040.82,
      isActive: false,
      teamId: "<id>",
      id: "<id>",
    },
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload314Budget](../models/usereventpayload314budget.md) | :heavy_check_mark:                                                         | N/A                                                                        |