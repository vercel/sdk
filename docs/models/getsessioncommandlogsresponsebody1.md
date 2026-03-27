# GetSessionCommandLogsResponseBody1

## Example Usage

```typescript
import { GetSessionCommandLogsResponseBody1 } from "@vercel/sdk/models/getsessioncommandlogsop.js";

let value: GetSessionCommandLogsResponseBody1 = {
  stream: "<value>",
  data: {
    code: "sandbox_stream_closed",
    message: "Sandbox stream was closed and is not accepting commands.",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `stream`                                                                                           | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `data`                                                                                             | [models.GetSessionCommandLogsResponseBodyData](../models/getsessioncommandlogsresponsebodydata.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |