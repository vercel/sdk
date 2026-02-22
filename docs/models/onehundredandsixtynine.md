# OneHundredAndSixtyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixtyNine } from "@vercel/sdk/models/onehundredandsixtyfour.js";

let value: OneHundredAndSixtyNine = {
  budget: {
    type: "fixed",
    fixedBudget: 5943.41,
    previousSpend: [
      6707.47,
      1499.39,
    ],
    notifiedAt: [
      9835.77,
      9985.59,
      6854.65,
    ],
    createdAt: 1394.57,
    isActive: false,
    teamId: "<id>",
    id: "<id>",
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `budget`                                                                | [models.PayloadBudget](../models/payloadbudget.md)                      | :heavy_check_mark:                                                      | Represents a budget for tracking and notifying teams on their spending. |