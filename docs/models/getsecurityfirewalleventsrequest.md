# GetSecurityFirewallEventsRequest

## Example Usage

```typescript
import { GetSecurityFirewallEventsRequest } from "@vercel/sdk/models/getsecurityfirewalleventsop.js";

let value: GetSecurityFirewallEventsRequest = {
  projectId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `startTimestamp`   | *number*           | :heavy_minus_sign: | N/A                |
| `endTimestamp`     | *number*           | :heavy_minus_sign: | N/A                |
| `hosts`            | *string*           | :heavy_minus_sign: | N/A                |