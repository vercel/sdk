# TwoHundredAndEighteen

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndEighteen } from "@vercel/sdk/models/userevent.js";

let value: TwoHundredAndEighteen = {
  budget: {
    type: "fixed",
    fixedBudget: 2164.06,
    previousSpend: [
      534.69,
      1342.21,
    ],
    notifiedAt: [
      8339.53,
      0.21,
      5094.45,
    ],
    createdAt: 696.95,
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