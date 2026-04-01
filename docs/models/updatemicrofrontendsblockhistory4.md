# UpdateMicrofrontendsBlockHistory4

## Example Usage

```typescript
import { UpdateMicrofrontendsBlockHistory4 } from "@vercel/sdk/models/updatemicrofrontendsop.js";

let value: UpdateMicrofrontendsBlockHistory4 = {
  action: "route-unblocked",
  route: {
    src: "<value>",
    status: 1464.99,
  },
  createdAt: 7670.1,
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `action`                                               | *"route-unblocked"*                                    | :heavy_check_mark:                                     | N/A                                                    |
| `route`                                                | *models.UpdateMicrofrontendsBlockHistoryProjectsRoute* | :heavy_check_mark:                                     | N/A                                                    |
| `statusCode`                                           | *number*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `createdAt`                                            | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `caseId`                                               | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `actor`                                                | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `comment`                                              | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `ineligibleForAppeal`                                  | *boolean*                                              | :heavy_minus_sign:                                     | N/A                                                    |
| `isCascading`                                          | *boolean*                                              | :heavy_minus_sign:                                     | N/A                                                    |