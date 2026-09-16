# Trace

## Example Usage

```typescript
import { Trace } from "@vercel/sdk/models/getprojecttraceop.js";

let value: Trace = {
  spans: [],
  traceId: "<id>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `resources`                                                                | [models.GetProjectTraceResources](../models/getprojecttraceresources.md)[] | :heavy_minus_sign:                                                         | N/A                                                                        |
| `rootSpanId`                                                               | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `spans`                                                                    | [models.Spans](../models/spans.md)[]                                       | :heavy_check_mark:                                                         | N/A                                                                        |
| `traceId`                                                                  | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |