# Trace

## Example Usage

```typescript
import { Trace } from "@vercel/sdk/models/getprojecttraceop.js";

let value: Trace = {
  traceId: "<id>",
  spans: [],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `traceId`                                                                  | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `resources`                                                                | [models.GetProjectTraceResources](../models/getprojecttraceresources.md)[] | :heavy_minus_sign:                                                         | N/A                                                                        |
| `spans`                                                                    | [models.Spans](../models/spans.md)[]                                       | :heavy_check_mark:                                                         | N/A                                                                        |
| `rootSpanId`                                                               | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |