# GetRollingReleaseBillingStatusResponseBody1

## Example Usage

```typescript
import { GetRollingReleaseBillingStatusResponseBody1 } from "@vercel/sdk/models/getrollingreleasebillingstatusop.js";

let value: GetRollingReleaseBillingStatusResponseBody1 = {
  availableSlots: 8978.48,
  reason: "plan_not_supported",
  message: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `availableSlots`                                             | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `reason`                                                     | [models.ResponseBodyReason](../models/responsebodyreason.md) | :heavy_check_mark:                                           | N/A                                                          |
| `message`                                                    | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |