# GetCommandLogsResponseBody1

## Example Usage

```typescript
import { GetCommandLogsResponseBody1 } from "@vercel/sdk/models/getcommandlogsop.js";

let value: GetCommandLogsResponseBody1 = {
  stream: "<value>",
  data: {
    code: "sandbox_stream_closed",
    message: "Sandbox stream was closed and is not accepting commands.",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `stream`                                                                             | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `data`                                                                               | [models.GetCommandLogsResponseBodyData](../models/getcommandlogsresponsebodydata.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |