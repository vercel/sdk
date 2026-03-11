# GetSecurityFirewallEventsResponseBody

## Example Usage

```typescript
import { GetSecurityFirewallEventsResponseBody } from "@vercel/sdk/models/getsecurityfirewalleventsop.js";

let value: GetSecurityFirewallEventsResponseBody = {
  actions: [
    {
      startTime: "<value>",
      endTime: "<value>",
      isActive: false,
      actionType: "<value>",
      host: "severe-massage.org",
      publicIp: "<value>",
      count: 448.54,
    },
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `actions`                                                                                  | [models.GetSecurityFirewallEventsActions](../models/getsecurityfirewalleventsactions.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |