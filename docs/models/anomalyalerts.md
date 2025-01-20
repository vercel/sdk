# AnomalyAlerts

## Example Usage

```typescript
import { AnomalyAlerts } from "@vercel/sdk/models/getactiveattackstatusop.js";

let value: AnomalyAlerts = {
  atMinute: "<value>",
  zscore: 5576.51,
  totalRequestsMinute: 3178.73,
  avgRequests: 6141.75,
  stddevRequests: 4196,
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