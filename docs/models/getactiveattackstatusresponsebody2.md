# GetActiveAttackStatusResponseBody2

## Example Usage

```typescript
import { GetActiveAttackStatusResponseBody2 } from "@vercel/sdk/models/getactiveattackstatusop.js";

let value: GetActiveAttackStatusResponseBody2 = {
  anomalies: [
    {
      ownerId: "<id>",
      projectId: "<id>",
      startTime: 9286.43,
      endTime: 7198.52,
      atMinute: 7673.61,
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