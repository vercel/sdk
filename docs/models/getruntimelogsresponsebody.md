# GetRuntimeLogsResponseBody

## Example Usage

```typescript
import { GetRuntimeLogsResponseBody } from "@vercel/sdk/models/getruntimelogsop.js";

let value: GetRuntimeLogsResponseBody = {
  domain: "cruel-solution.name",
  level: "debug",
  message: "<value>",
  messageTruncated: true,
  requestMethod: "<value>",
  requestPath: "<value>",
  responseStatusCode: 8006.52,
  rowId: "<id>",
  source: "edge-function",
  timestampInMs: 5045.16,
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `domain`                                                         | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `level`                                                          | [models.GetRuntimeLogsLevel](../models/getruntimelogslevel.md)   | :heavy_check_mark:                                               | N/A                                                              |
| `message`                                                        | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `messageTruncated`                                               | *boolean*                                                        | :heavy_check_mark:                                               | N/A                                                              |
| `requestMethod`                                                  | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `requestPath`                                                    | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `responseStatusCode`                                             | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `rowId`                                                          | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `source`                                                         | [models.GetRuntimeLogsSource](../models/getruntimelogssource.md) | :heavy_check_mark:                                               | N/A                                                              |
| `timestampInMs`                                                  | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |