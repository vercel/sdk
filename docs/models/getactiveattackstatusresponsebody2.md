# GetActiveAttackStatusResponseBody2

## Example Usage

```typescript
import { GetActiveAttackStatusResponseBody2 } from "@vercel/sdk/models/getactiveattackstatusop.js";

let value: GetActiveAttackStatusResponseBody2 = {
  anomalies: [
    {
      projectId: "<id>",
      ownerId: "<id>",
      startTime: 1785.24,
      endTime: 937.85,
      atMinute: 3117.97,
      affectedHostMap: {},
    },
  ],
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `anomalies`                                  | [models.Anomalies](../models/anomalies.md)[] | :heavy_check_mark:                           | N/A                                          |