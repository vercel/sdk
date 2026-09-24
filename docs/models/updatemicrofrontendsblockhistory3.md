# UpdateMicrofrontendsBlockHistory3

## Example Usage

```typescript
import { UpdateMicrofrontendsBlockHistory3 } from "@vercel/sdk/models/updatemicrofrontendscreatedeployments.js";

let value: UpdateMicrofrontendsBlockHistory3 = {
  action: "route-blocked",
  createdAt: 8834.96,
  reason: "<value>",
  route: {
    src: "<value>",
    status: 9290.74,
  },
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `action`                                       | *"route-blocked"*                              | :heavy_check_mark:                             | N/A                                            |
| `actor`                                        | *string*                                       | :heavy_minus_sign:                             | N/A                                            |
| `caseId`                                       | *string*                                       | :heavy_minus_sign:                             | N/A                                            |
| `comment`                                      | *string*                                       | :heavy_minus_sign:                             | N/A                                            |
| `createdAt`                                    | *number*                                       | :heavy_check_mark:                             | N/A                                            |
| `ineligibleForAppeal`                          | *boolean*                                      | :heavy_minus_sign:                             | N/A                                            |
| `isCascading`                                  | *boolean*                                      | :heavy_minus_sign:                             | N/A                                            |
| `reason`                                       | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `route`                                        | *models.UpdateMicrofrontendsBlockHistoryRoute* | :heavy_check_mark:                             | N/A                                            |