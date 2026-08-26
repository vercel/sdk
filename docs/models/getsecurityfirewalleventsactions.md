# GetSecurityFirewallEventsActions

## Example Usage

```typescript
import { GetSecurityFirewallEventsActions } from "@vercel/sdk/models/getsecurityfirewalleventsop.js";

let value: GetSecurityFirewallEventsActions = {
  ruleName: "<value>",
  startTime: "<value>",
  endTime: "<value>",
  isActive: false,
  actionType: "<value>",
  action: "<value>",
  ruleId: "<id>",
  host: "trivial-birdcage.com",
  publicIp: "<value>",
  count: 9879.09,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `ruleName`         | *string*           | :heavy_check_mark: | N/A                |
| `startTime`        | *string*           | :heavy_check_mark: | N/A                |
| `endTime`          | *string*           | :heavy_check_mark: | N/A                |
| `isActive`         | *boolean*          | :heavy_check_mark: | N/A                |
| `actionType`       | *string*           | :heavy_check_mark: | N/A                |
| `action`           | *string*           | :heavy_check_mark: | N/A                |
| `ruleId`           | *string*           | :heavy_check_mark: | N/A                |
| `host`             | *string*           | :heavy_check_mark: | N/A                |
| `publicIp`         | *string*           | :heavy_check_mark: | N/A                |
| `count`            | *number*           | :heavy_check_mark: | N/A                |