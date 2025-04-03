# BudgetItem

Represents a budget for tracking and notifying teams on their spending.

## Example Usage

```typescript
import { BudgetItem } from "@vercel/sdk/models/userevent.js";

let value: BudgetItem = {
  type: "fixed",
  fixedBudget: 6019.44,
  previousSpend: [
    633.69,
  ],
  notifiedAt: [
    4098.57,
  ],
  createdAt: 7225,
  isActive: false,
  teamId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `type`                                                                | [models.UserEventPayload97Type](../models/usereventpayload97type.md)  | :heavy_check_mark:                                                    | The budget type                                                       |
| `fixedBudget`                                                         | *number*                                                              | :heavy_check_mark:                                                    | Budget amount                                                         |
| `previousSpend`                                                       | *number*[]                                                            | :heavy_check_mark:                                                    | Array of the last 3 months of spend data                              |
| `notifiedAt`                                                          | *number*[]                                                            | :heavy_check_mark:                                                    | Array of 50, 75, 100 to keep track of notifications sent out          |
| `webhookId`                                                           | *string*                                                              | :heavy_minus_sign:                                                    | Webhook id that corresponds to a webhook in Cosmos webhook collection |
| `webhookNotified`                                                     | *boolean*                                                             | :heavy_minus_sign:                                                    | Keep track if the webhook has been called for the month               |
| `createdAt`                                                           | *number*                                                              | :heavy_check_mark:                                                    | Date time when budget is created                                      |
| `updatedAt`                                                           | *number*                                                              | :heavy_minus_sign:                                                    | Date time when budget is updated last                                 |
| `isActive`                                                            | *boolean*                                                             | :heavy_check_mark:                                                    | Is the budget currently active for a customer                         |
| `pauseProjects`                                                       | *boolean*                                                             | :heavy_minus_sign:                                                    | Should all projects be paused if budget is exceeded                   |
| `pricingPlan`                                                         | [models.PayloadPricingPlan](../models/payloadpricingplan.md)          | :heavy_minus_sign:                                                    | The acive pricing plan the team is billed with                        |
| `teamId`                                                              | *string*                                                              | :heavy_check_mark:                                                    | Partition key                                                         |
| `id`                                                                  | *string*                                                              | :heavy_check_mark:                                                    | Sort key that needs to be unique per teamId                           |