# GetVercelCiInvocationLogsResponseBody

Successfully fetched invocation log lines.

## Example Usage

```typescript
import { GetVercelCiInvocationLogsResponseBody } from "@vercel/sdk/models/getvercelciinvocationlogsop.js";

let value: GetVercelCiInvocationLogsResponseBody = {
  lines: [
    {
      level: "<value>",
      timestamp: 7199.3,
      message: "<value>",
    },
  ],
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `lines`                              | [models.Lines](../models/lines.md)[] | :heavy_check_mark:                   | N/A                                  |