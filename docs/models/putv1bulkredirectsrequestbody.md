# PutV1BulkRedirectsRequestBody

## Example Usage

```typescript
import { PutV1BulkRedirectsRequestBody } from "@vercel/sdk/models/putv1bulkredirectsop.js";

let value: PutV1BulkRedirectsRequestBody = {
  projectId: "<id>",
  teamId: "<id>",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `projectId`                                  | *string*                                     | :heavy_check_mark:                           | N/A                                          |
| `teamId`                                     | *string*                                     | :heavy_check_mark:                           | N/A                                          |
| `overwrite`                                  | *boolean*                                    | :heavy_minus_sign:                           | N/A                                          |
| `name`                                       | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `redirects`                                  | [models.Redirects](../models/redirects.md)[] | :heavy_minus_sign:                           | N/A                                          |