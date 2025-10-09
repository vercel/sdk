# Anomalies

## Example Usage

```typescript
import { Anomalies } from "@vercel/sdk/models/getactiveattackstatusop.js";

let value: Anomalies = {
  projectId: "<id>",
  ownerId: "<id>",
  startTime: 1785.24,
  endTime: 937.85,
  atMinute: 3117.97,
  affectedHostMap: {},
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `projectId`                                                            | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `ownerId`                                                              | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `startTime`                                                            | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `endTime`                                                              | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `atMinute`                                                             | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `state`                                                                | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `affectedHostMap`                                                      | Record<string, [models.AffectedHostMap](../models/affectedhostmap.md)> | :heavy_check_mark:                                                     | N/A                                                                    |