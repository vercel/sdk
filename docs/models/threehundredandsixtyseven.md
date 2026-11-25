# ThreeHundredAndSixtySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSixtySeven } from "@vercel/sdk/models/usereventpayload328previous.js";

let value: ThreeHundredAndSixtySeven = {
  projectId: "<id>",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `budgetId`                                                                           | *string*                                                                             | :heavy_minus_sign:                                                                   | The budget that paused the project, for `BUDGET_REACHED`. Absent on older events.    |
| `budgetScope`                                                                        | [models.BudgetScope](../models/budgetscope.md)                                       | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `projectId`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `projectName`                                                                        | *string*                                                                             | :heavy_minus_sign:                                                                   | Display name for Activity links. Optional for events stored before it was published. |
| `reasonCode`                                                                         | [models.ReasonCode](../models/reasoncode.md)                                         | :heavy_minus_sign:                                                                   | N/A                                                                                  |