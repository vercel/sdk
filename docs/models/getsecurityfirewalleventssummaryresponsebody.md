# GetSecurityFirewallEventsSummaryResponseBody

## Example Usage

```typescript
import { GetSecurityFirewallEventsSummaryResponseBody } from "@vercel/sdk/models/getsecurityfirewalleventssummaryop.js";

let value: GetSecurityFirewallEventsSummaryResponseBody = {
  blockingIps: 9526.55,
  byAction: {
    "key": 7649.24,
  },
  byActionType: {},
  challengingIps: 9799.68,
  other: 4981.78,
  total: 356.73,
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `blockingIps`            | *number*                 | :heavy_check_mark:       | N/A                      |
| `byAction`               | Record<string, *number*> | :heavy_check_mark:       | N/A                      |
| `byActionType`           | Record<string, *number*> | :heavy_check_mark:       | N/A                      |
| `challengingIps`         | *number*                 | :heavy_check_mark:       | N/A                      |
| `other`                  | *number*                 | :heavy_check_mark:       | N/A                      |
| `total`                  | *number*                 | :heavy_check_mark:       | N/A                      |