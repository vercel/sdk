# GetProjectUsageStatus

## Example Usage

```typescript
import { GetProjectUsageStatus } from "@vercel/sdk/models/getprojectresponsebody.js";

let value: GetProjectUsageStatus = {
  kind: "flat",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `kind`                                                                              | [models.GetProjectKind](../models/getprojectkind.md)                                | :heavy_check_mark:                                                                  | Billing mode. Always 'flat' for flat-rate projects.                                 |
| `exceededAllowanceUntil`                                                            | *number*                                                                            | :heavy_minus_sign:                                                                  | Timestamp until which the project has exceeded its CDN allowance.                   |
| `bypassThrottleUntil`                                                               | *number*                                                                            | :heavy_minus_sign:                                                                  | Timestamp until which throttling is bypassed (project pays list rates for overage). |
| `throttled`                                                                         | *boolean*                                                                           | :heavy_minus_sign:                                                                  | Whether the project is currently throttled.                                         |