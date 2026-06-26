# TwoHundredAndEightyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndEightyEight } from "@vercel/sdk/models/rollbackdescription.js";

let value: TwoHundredAndEightyEight = {
  budget: {
    type: "fixed",
    fixedBudget: 2982.59,
    previousSpend: [],
    notifiedAt: [
      5735.29,
      1444.34,
    ],
    createdAt: 2475.8,
    isActive: false,
    teamId: "<id>",
    id: "<id>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload288Budget](../models/usereventpayload288budget.md) | :heavy_check_mark:                                                         | Represents a budget for tracking and notifying teams on their spending.    |