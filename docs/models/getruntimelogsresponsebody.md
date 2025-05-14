# GetRuntimeLogsResponseBody

## Example Usage

```typescript
import { GetRuntimeLogsResponseBody } from "@vercel/sdk/models/getruntimelogsop.js";

let value: GetRuntimeLogsResponseBody = {
  level: "error",
  message: "<value>",
  rowId: "<id>",
  source: "request",
  timestampInMs: 6344.7,
  domain: "corrupt-hovel.net",
  messageTruncated: false,
  requestMethod: "<value>",
  requestPath: "<value>",
  responseStatusCode: 3493.22,
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `level`                                                          | [models.GetRuntimeLogsLevel](../models/getruntimelogslevel.md)   | :heavy_check_mark:                                               | N/A                                                              |
| `message`                                                        | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `rowId`                                                          | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `source`                                                         | [models.GetRuntimeLogsSource](../models/getruntimelogssource.md) | :heavy_check_mark:                                               | N/A                                                              |
| `timestampInMs`                                                  | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `domain`                                                         | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `messageTruncated`                                               | *boolean*                                                        | :heavy_check_mark:                                               | N/A                                                              |
| `requestMethod`                                                  | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `requestPath`                                                    | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `responseStatusCode`                                             | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |