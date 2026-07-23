# GetProjectTraceResponseBody

## Example Usage

```typescript
import { GetProjectTraceResponseBody } from "@vercel/sdk/models/getprojecttraceop.js";

let value: GetProjectTraceResponseBody = {
  trace: {
    traceId: "<id>",
    spans: [
      {
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
      },
    ],
  },
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `trace`                            | [models.Trace](../models/trace.md) | :heavy_check_mark:                 | N/A                                |