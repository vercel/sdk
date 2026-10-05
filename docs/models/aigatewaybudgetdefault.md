# AiGatewayBudgetDefault

## Example Usage

```typescript
import { AiGatewayBudgetDefault } from "@vercel/sdk/models/aigatewaybudgetdefault.js";

let value: AiGatewayBudgetDefault = {
  active: false,
  createdAt: 3650.58,
  limitAmount: 9811.91,
  refreshPeriod: "weekly",
  scopeType: "project",
  updatedAt: 5055.38,
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `active`                                                                                       | *boolean*                                                                                      | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `alertThresholds`                                                                              | *number*[]                                                                                     | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `createdAt`                                                                                    | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `limitAmount`                                                                                  | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `refreshPeriod`                                                                                | [models.AiGatewayBudgetDefaultRefreshPeriod](../models/aigatewaybudgetdefaultrefreshperiod.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `scopeType`                                                                                    | [models.AiGatewayBudgetDefaultScopeType](../models/aigatewaybudgetdefaultscopetype.md)         | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `updatedAt`                                                                                    | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |