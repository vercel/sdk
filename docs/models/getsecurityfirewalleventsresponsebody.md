# GetSecurityFirewallEventsResponseBody

## Example Usage

```typescript
import { GetSecurityFirewallEventsResponseBody } from "@vercel/sdk/models/getsecurityfirewalleventsop.js";

let value: GetSecurityFirewallEventsResponseBody = {
  actions: [
    {
      ruleName: "<value>",
      startTime: "<value>",
      endTime: "<value>",
      isActive: false,
      actionType: "<value>",
      action: "<value>",
      ruleId: "<id>",
      host: "tense-apricot.org",
      publicIp: "<value>",
      count: 2155.38,
    },
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `actions`                                                                                  | [models.GetSecurityFirewallEventsActions](../models/getsecurityfirewalleventsactions.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |