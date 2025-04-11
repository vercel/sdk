# AnomalyAlerts

## Example Usage

```typescript
import { AnomalyAlerts } from "@vercel/sdk/models/getactiveattackstatusop.js";

let value: AnomalyAlerts = {
  atMinute: "<value>",
  zscore: 1070.39,
  totalRequestsMinute: 535.39,
  avgRequests: 7615.46,
  stddevRequests: 5178.09,
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `atMinute`            | *string*              | :heavy_check_mark:    | N/A                   |
| `zscore`              | *number*              | :heavy_check_mark:    | N/A                   |
| `totalRequestsMinute` | *number*              | :heavy_check_mark:    | N/A                   |
| `avgRequests`         | *number*              | :heavy_check_mark:    | N/A                   |
| `stddevRequests`      | *number*              | :heavy_check_mark:    | N/A                   |