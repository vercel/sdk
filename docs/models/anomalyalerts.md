# AnomalyAlerts

## Example Usage

```typescript
import { AnomalyAlerts } from "@vercel/sdk/models/getactiveattackstatusop.js";

let value: AnomalyAlerts = {
  atMinute: "<value>",
  zscore: 5844.83,
  totalRequestsMinute: 913.33,
  avgRequests: 5662.62,
  stddevRequests: 792.37,
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