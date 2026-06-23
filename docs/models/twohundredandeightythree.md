# TwoHundredAndEightyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndEightyThree } from "@vercel/sdk/models/consent.js";

let value: TwoHundredAndEightyThree = {
  budget: {
    type: "fixed",
    fixedBudget: 1701.73,
    previousSpend: [
      1998.14,
      9719.47,
      1902.86,
    ],
    notifiedAt: [
      7516.47,
      8855.2,
    ],
    createdAt: 326.08,
    isActive: false,
    teamId: "<id>",
    id: "<id>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload283Budget](../models/usereventpayload283budget.md) | :heavy_check_mark:                                                         | Represents a budget for tracking and notifying teams on their spending.    |