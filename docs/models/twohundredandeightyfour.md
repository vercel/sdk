# TwoHundredAndEightyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndEightyFour } from "@vercel/sdk/models/rollbackdescription.js";

let value: TwoHundredAndEightyFour = {
  budget: {
    type: "fixed",
    fixedBudget: 8846.95,
    previousSpend: [
      9897.55,
      9000.15,
    ],
    notifiedAt: [
      4663.48,
    ],
    createdAt: 6764.43,
    isActive: false,
    teamId: "<id>",
    id: "<id>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload284Budget](../models/usereventpayload284budget.md) | :heavy_check_mark:                                                         | Represents a budget for tracking and notifying teams on their spending.    |