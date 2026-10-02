# UpsertAiGatewayBudgetRequestBody

## Example Usage

```typescript
import { UpsertAiGatewayBudgetRequestBody } from "@vercel/sdk/models/upsertaigatewaybudgetop.js";

let value: UpsertAiGatewayBudgetRequestBody = {
  scopeType: "team",
  limitAmount: 6239.95,
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `scopeType`                                                                                  | [models.UpsertAiGatewayBudgetScopeType](../models/upsertaigatewaybudgetscopetype.md)         | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `projectId`                                                                                  | *string*                                                                                     | :heavy_minus_sign:                                                                           | Required when scopeType is "project".                                                        |
| `userId`                                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | Required when scopeType is "user".                                                           |
| `limitAmount`                                                                                | *number*                                                                                     | :heavy_check_mark:                                                                           | Budget limit in dollars.                                                                     |
| `refreshPeriod`                                                                              | [models.UpsertAiGatewayBudgetRefreshPeriod](../models/upsertaigatewaybudgetrefreshperiod.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `includeByokInQuota`                                                                         | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | Whether BYOK usage counts toward this budget.                                                |
| `alertThresholds`                                                                            | *number*[]                                                                                   | :heavy_minus_sign:                                                                           | N/A                                                                                          |