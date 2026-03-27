# GetSessionCommandLogsResponseBodyData

## Example Usage

```typescript
import { GetSessionCommandLogsResponseBodyData } from "@vercel/sdk/models/getsessioncommandlogsop.js";

let value: GetSessionCommandLogsResponseBodyData = {
  code: "sandbox_stream_closed",
  message: "Sandbox stream was closed and is not accepting commands.",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `code`                                                                                             | [models.GetSessionCommandLogsResponseBodyCode](../models/getsessioncommandlogsresponsebodycode.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `message`                                                                                          | [models.ResponseBodyMessage](../models/responsebodymessage.md)                                     | :heavy_check_mark:                                                                                 | N/A                                                                                                |