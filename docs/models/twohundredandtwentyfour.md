# TwoHundredAndTwentyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwentyFour } from "@vercel/sdk/models/usereventpayload222previous.js";

let value: TwoHundredAndTwentyFour = {
  budget: {
    type: "fixed",
    fixedBudget: 9234.69,
    previousSpend: [
      443.5,
    ],
    notifiedAt: [
      6191.06,
      9894.34,
    ],
    createdAt: 9396.17,
    isActive: true,
    teamId: "<id>",
    id: "<id>",
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `budget`                                                                | [models.PayloadBudget](../models/payloadbudget.md)                      | :heavy_check_mark:                                                      | Represents a budget for tracking and notifying teams on their spending. |