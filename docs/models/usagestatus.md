# UsageStatus

## Example Usage

```typescript
import { UsageStatus } from "@vercel/sdk/models/usagestatus.js";

let value: UsageStatus = {
  kind: "flat",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `kind`                                                                              | [models.CreateProjectKind](../models/createprojectkind.md)                          | :heavy_check_mark:                                                                  | Billing mode. Always 'flat' for flat-rate projects.                                 |
| `exceededAllowanceUntil`                                                            | *number*                                                                            | :heavy_minus_sign:                                                                  | Timestamp until which the project has exceeded its CDN allowance.                   |
| `bypassThrottleUntil`                                                               | *number*                                                                            | :heavy_minus_sign:                                                                  | Timestamp until which throttling is bypassed (project pays list rates for overage). |