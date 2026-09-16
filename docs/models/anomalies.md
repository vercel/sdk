# Anomalies

## Example Usage

```typescript
import { Anomalies } from "@vercel/sdk/models/getactiveattackstatusop.js";

let value: Anomalies = {
  affectedHostMap: {},
  atMinute: 4049.74,
  endTime: null,
  ownerId: "<id>",
  projectId: "<id>",
  startTime: 3117.97,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `affectedHostMap`                                                      | Record<string, [models.AffectedHostMap](../models/affectedhostmap.md)> | :heavy_check_mark:                                                     | N/A                                                                    |
| `atMinute`                                                             | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `endTime`                                                              | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `ownerId`                                                              | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `projectId`                                                            | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `startTime`                                                            | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `state`                                                                | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |