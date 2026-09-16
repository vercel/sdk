# Spans

## Example Usage

```typescript
import { Spans } from "@vercel/sdk/models/getprojecttraceop.js";

let value: Spans = {
  attributes: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  duration: [
    1802,
    4048.99,
  ],
  endTime: [
    9442.69,
  ],
  events: [
    {
      attributes: {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
      },
      name: "<value>",
      timestamp: [
        3967.45,
        1769.22,
      ],
    },
  ],
  kind: 7206.35,
  library: {
    name: "<value>",
  },
  links: [
    {
      "key": "<value>",
    },
  ],
  name: "<value>",
  resource: "<value>",
  spanId: "<id>",
  startTime: [],
  status: {
    code: 5662.64,
  },
  traceFlags: 120.18,
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `attributes`                                                         | Record<string, *any*>                                                | :heavy_check_mark:                                                   | N/A                                                                  |
| `duration`                                                           | *number*[]                                                           | :heavy_check_mark:                                                   | N/A                                                                  |
| `endTime`                                                            | *number*[]                                                           | :heavy_check_mark:                                                   | N/A                                                                  |
| `events`                                                             | [models.GetProjectTraceEvents](../models/getprojecttraceevents.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `kind`                                                               | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `library`                                                            | [models.Library](../models/library.md)                               | :heavy_check_mark:                                                   | N/A                                                                  |
| `links`                                                              | Record<string, *any*>[]                                              | :heavy_check_mark:                                                   | N/A                                                                  |
| `name`                                                               | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `parentSpanId`                                                       | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `resource`                                                           | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `spanId`                                                             | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `startTime`                                                          | *number*[]                                                           | :heavy_check_mark:                                                   | N/A                                                                  |
| `status`                                                             | [models.GetProjectTraceStatus](../models/getprojecttracestatus.md)   | :heavy_check_mark:                                                   | N/A                                                                  |
| `traceFlags`                                                         | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `traceState`                                                         | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |