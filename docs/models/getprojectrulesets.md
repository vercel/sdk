# GetProjectRulesets

## Example Usage

```typescript
import { GetProjectRulesets } from "@vercel/sdk/models/getprojectdestination.js";

let value: GetProjectRulesets = {
  action: "log",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `action`                                                                                       | [models.GetProjectProjectsResponse200Action](../models/getprojectprojectsresponse200action.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `rateLimit`                                                                                    | [models.GetProjectRateLimit](../models/getprojectratelimit.md)                                 | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `redirect`                                                                                     | [models.GetProjectRedirect](../models/getprojectredirect.md)                                   | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `actionDuration`                                                                               | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `bypassSystem`                                                                                 | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `logHeaders`                                                                                   | *models.GetProjectProjectsLogHeaders*                                                          | :heavy_minus_sign:                                                                             | N/A                                                                                            |