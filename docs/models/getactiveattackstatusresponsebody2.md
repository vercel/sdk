# GetActiveAttackStatusResponseBody2

## Example Usage

```typescript
import { GetActiveAttackStatusResponseBody2 } from "@vercel/sdk/models/getactiveattackstatusop.js";

let value: GetActiveAttackStatusResponseBody2 = {
  anomalies: [
    {
      ownerId: "<id>",
      projectId: "<id>",
      startTime: 4153.95,
      endTime: 5082.71,
      atMinute: 7874.67,
      affectedHostMap: {
        "key": {},
      },
    },
  ],
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `anomalies`                                  | [models.Anomalies](../models/anomalies.md)[] | :heavy_check_mark:                           | N/A                                          |