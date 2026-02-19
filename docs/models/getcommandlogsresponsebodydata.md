# GetCommandLogsResponseBodyData

## Example Usage

```typescript
import { GetCommandLogsResponseBodyData } from "@vercel/sdk/models/getcommandlogsop.js";

let value: GetCommandLogsResponseBodyData = {
  code: "sandbox_stream_closed",
  message: "Sandbox stream was closed and is not accepting commands.",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `code`                                                   | [models.ResponseBodyCode](../models/responsebodycode.md) | :heavy_check_mark:                                       | N/A                                                      |
| `message`                                                | [models.Message](../models/message.md)                   | :heavy_check_mark:                                       | N/A                                                      |