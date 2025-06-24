# ResponseBody4

## Example Usage

```typescript
import { ResponseBody4 } from "@vercel/sdk/models/getrollingreleasebillingstatusop.js";

let value: ResponseBody4 = {
  availableSlots: 1850.51,
  reason: "no_available_slots",
  enabledProjects: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `availableSlots`                                                                                                                                                     | *number*                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `reason`                                                                                                                                                             | [models.GetRollingReleaseBillingStatusResponseBodyRollingReleaseResponseReason](../models/getrollingreleasebillingstatusresponsebodyrollingreleaseresponsereason.md) | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `enabledProjects`                                                                                                                                                    | *string*[]                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |