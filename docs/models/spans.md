# Spans

## Example Usage

```typescript
import { Spans } from "@vercel/sdk/models/getprojecttraceop.js";

let value: Spans = {
  name: "<value>",
  kind: 9949.01,
  resource: "<value>",
  library: {
    name: "<value>",
  },
  spanId: "<id>",
  status: {
    code: 6061.62,
  },
  traceFlags: 1802,
  attributes: {
    "key": "<value>",
  },
  links: [
    {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
  ],
  events: [
    {
      name: "<value>",
      timestamp: [
        6190.78,
        3967.45,
        1769.22,
      ],
      attributes: {
        "key": "<value>",
        "key1": "<value>",
      },
    },
  ],
  startTime: [
    3911.28,
  ],
  endTime: [],
  duration: [
    120.18,
    2048.63,
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `name`                                                               | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `kind`                                                               | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `resource`                                                           | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `library`                                                            | [models.Library](../models/library.md)                               | :heavy_check_mark:                                                   | N/A                                                                  |
| `spanId`                                                             | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `parentSpanId`                                                       | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `status`                                                             | [models.GetProjectTraceStatus](../models/getprojecttracestatus.md)   | :heavy_check_mark:                                                   | N/A                                                                  |
| `traceFlags`                                                         | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `attributes`                                                         | Record<string, *any*>                                                | :heavy_check_mark:                                                   | N/A                                                                  |
| `links`                                                              | Record<string, *any*>[]                                              | :heavy_check_mark:                                                   | N/A                                                                  |
| `events`                                                             | [models.GetProjectTraceEvents](../models/getprojecttraceevents.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `startTime`                                                          | *number*[]                                                           | :heavy_check_mark:                                                   | N/A                                                                  |
| `endTime`                                                            | *number*[]                                                           | :heavy_check_mark:                                                   | N/A                                                                  |
| `duration`                                                           | *number*[]                                                           | :heavy_check_mark:                                                   | N/A                                                                  |