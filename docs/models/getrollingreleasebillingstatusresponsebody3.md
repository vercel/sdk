# GetRollingReleaseBillingStatusResponseBody3

## Example Usage

```typescript
import { GetRollingReleaseBillingStatusResponseBody3 } from "@vercel/sdk/models/getrollingreleasebillingstatusop.js";

let value: GetRollingReleaseBillingStatusResponseBody3 = {
  availableSlots: 9031.84,
  reason: "no_available_slots",
  message: "<value>",
  enabledProjects: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `availableSlots`                                                                                                                                     | *number*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `reason`                                                                                                                                             | [models.GetRollingReleaseBillingStatusResponseBodyRollingReleaseReason](../models/getrollingreleasebillingstatusresponsebodyrollingreleasereason.md) | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `message`                                                                                                                                            | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `enabledProjects`                                                                                                                                    | *string*[]                                                                                                                                           | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |