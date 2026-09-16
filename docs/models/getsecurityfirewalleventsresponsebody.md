# GetSecurityFirewallEventsResponseBody

## Example Usage

```typescript
import { GetSecurityFirewallEventsResponseBody } from "@vercel/sdk/models/getsecurityfirewalleventsop.js";

let value: GetSecurityFirewallEventsResponseBody = {
  actions: [
    {
      action: "<value>",
      actionType: "<value>",
      count: 6945.03,
      endTime: "<value>",
      host: "severe-massage.org",
      isActive: true,
      publicIp: "<value>",
      ruleId: "<id>",
      ruleName: "<value>",
      startTime: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `actions`                                                                                  | [models.GetSecurityFirewallEventsActions](../models/getsecurityfirewalleventsactions.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |