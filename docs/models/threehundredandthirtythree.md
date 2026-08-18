# ThreeHundredAndThirtyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndThirtyThree } from "@vercel/sdk/models/usereventpayload326geolocationmostspecificsubdivisionnames.js";

let value: ThreeHundredAndThirtyThree = {
  budget: {
    type: "fixed",
    fixedBudget: 1837.32,
    previousSpend: [],
    notifiedAt: [
      6799.39,
      3140.75,
      4873.67,
    ],
    createdAt: 5988.71,
    isActive: false,
    teamId: "<id>",
    id: "<id>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload333Budget](../models/usereventpayload333budget.md) | :heavy_check_mark:                                                         | Represents a budget for tracking and notifying teams on their spending.    |
| `webhookUrl`                                                               | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |