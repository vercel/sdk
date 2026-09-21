# ThreeHundredAndFiftyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFiftyThree } from "@vercel/sdk/models/payloadcity.js";

let value: ThreeHundredAndFiftyThree = {
  budget: {
    createdAt: 8333.06,
    fixedBudget: 9556.22,
    id: "<id>",
    isActive: true,
    notifiedAt: [
      4691.62,
    ],
    previousSpend: [
      3429.28,
      2269.28,
      8506.54,
    ],
    teamId: "<id>",
    type: "fixed",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload353Budget](../models/usereventpayload353budget.md) | :heavy_check_mark:                                                         | Represents a budget for tracking and notifying teams on their spending.    |