# ThreeHundredAndSeventeen

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSeventeen } from "@vercel/sdk/models/ssoprotection2.js";

let value: ThreeHundredAndSeventeen = {
  budget: {
    type: "fixed",
    fixedBudget: 1573.36,
    previousSpend: [],
    notifiedAt: [
      7643.71,
      8183.3,
    ],
    createdAt: 4431.38,
    isActive: false,
    teamId: "<id>",
    id: "<id>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload317Budget](../models/usereventpayload317budget.md) | :heavy_check_mark:                                                         | Represents a budget for tracking and notifying teams on their spending.    |
| `webhookUrl`                                                               | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |