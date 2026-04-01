# GetMicrofrontendsInGroupUsageStatus

## Example Usage

```typescript
import { GetMicrofrontendsInGroupUsageStatus } from "@vercel/sdk/models/getmicrofrontendsingroupresponsebody.js";

let value: GetMicrofrontendsInGroupUsageStatus = {
  kind: "flat",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `kind`                                                                              | [models.GetMicrofrontendsInGroupKind](../models/getmicrofrontendsingroupkind.md)    | :heavy_check_mark:                                                                  | Billing mode. Always 'flat' for flat-rate projects.                                 |
| `exceededAllowanceUntil`                                                            | *number*                                                                            | :heavy_minus_sign:                                                                  | Timestamp until which the project has exceeded its CDN allowance.                   |
| `bypassThrottleUntil`                                                               | *number*                                                                            | :heavy_minus_sign:                                                                  | Timestamp until which throttling is bypassed (project pays list rates for overage). |