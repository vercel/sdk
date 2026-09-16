# GetProjectTraceResponseBody

## Example Usage

```typescript
import { GetProjectTraceResponseBody } from "@vercel/sdk/models/getprojecttraceop.js";

let value: GetProjectTraceResponseBody = {
  trace: {
    spans: [
      {
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
      },
    ],
    traceId: "<id>",
  },
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `trace`                            | [models.Trace](../models/trace.md) | :heavy_check_mark:                 | N/A                                |