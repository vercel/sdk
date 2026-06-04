# UploadProjectAvatarUsageStatus

## Example Usage

```typescript
import { UploadProjectAvatarUsageStatus } from "@vercel/sdk/models/uploadprojectavatarresponsebody.js";

let value: UploadProjectAvatarUsageStatus = {
  kind: "flat",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `kind`                                                                              | [models.UploadProjectAvatarKind](../models/uploadprojectavatarkind.md)              | :heavy_check_mark:                                                                  | Billing mode. Always 'flat' for flat-rate projects.                                 |
| `exceededAllowanceUntil`                                                            | *number*                                                                            | :heavy_minus_sign:                                                                  | Timestamp until which the project has exceeded its CDN allowance.                   |
| `bypassThrottleUntil`                                                               | *number*                                                                            | :heavy_minus_sign:                                                                  | Timestamp until which throttling is bypassed (project pays list rates for overage). |
| `throttled`                                                                         | *boolean*                                                                           | :heavy_minus_sign:                                                                  | Whether the project is currently throttled.                                         |