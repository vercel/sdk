# GetMicrofrontendsInGroupBlockHistory4

## Example Usage

```typescript
import { GetMicrofrontendsInGroupBlockHistory4 } from "@vercel/sdk/models/getmicrofrontendsingroupresponsebody.js";

let value: GetMicrofrontendsInGroupBlockHistory4 = {
  action: "route-unblocked",
  route: {
    src: "<value>",
    status: 5495.08,
  },
  createdAt: 5016.95,
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `action`                                                         | *"route-unblocked"*                                              | :heavy_check_mark:                                               | N/A                                                              |
| `route`                                                          | *models.GetMicrofrontendsInGroupBlockHistoryMicrofrontendsRoute* | :heavy_check_mark:                                               | N/A                                                              |
| `statusCode`                                                     | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `createdAt`                                                      | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `caseId`                                                         | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `actor`                                                          | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `comment`                                                        | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `ineligibleForAppeal`                                            | *boolean*                                                        | :heavy_minus_sign:                                               | N/A                                                              |
| `isCascading`                                                    | *boolean*                                                        | :heavy_minus_sign:                                               | N/A                                                              |