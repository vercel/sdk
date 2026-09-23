# ThreeHundredAndFiftyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFiftyFour } from "@vercel/sdk/models/payloadcity.js";

let value: ThreeHundredAndFiftyFour = {
  budget: {
    createdAt: 3939.2,
    fixedBudget: 6537.71,
    id: "<id>",
    isActive: true,
    notifiedAt: [],
    previousSpend: [
      3501.08,
      4302.83,
      1425.29,
    ],
    teamId: "<id>",
    type: "fixed",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload354Budget](../models/usereventpayload354budget.md) | :heavy_check_mark:                                                         | Represents a budget for tracking and notifying teams on their spending.    |