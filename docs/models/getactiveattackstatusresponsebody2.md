# GetActiveAttackStatusResponseBody2

## Example Usage

```typescript
import { GetActiveAttackStatusResponseBody2 } from "@vercel/sdk/models/getactiveattackstatusop.js";

let value: GetActiveAttackStatusResponseBody2 = {
  anomalies: [
    {
      ownerId: "<id>",
      projectId: "<id>",
      startTime: 4724.29,
      endTime: 8113.8,
      atMinute: 8156.18,
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