# UpdateProjectRulesets

## Example Usage

```typescript
import { UpdateProjectRulesets } from "@vercel/sdk/models/updateprojectprojectsresponse200applicationjsonresponsebodysecuritymanagedrulesaction.js";

let value: UpdateProjectRulesets = {
  action: "bypass",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `action`                                                                                       | [models.UpdateProjectProjectsResponseAction](../models/updateprojectprojectsresponseaction.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `rateLimit`                                                                                    | [models.UpdateProjectRateLimit](../models/updateprojectratelimit.md)                           | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `redirect`                                                                                     | [models.UpdateProjectRedirect](../models/updateprojectredirect.md)                             | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `actionDuration`                                                                               | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `bypassSystem`                                                                                 | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `logHeaders`                                                                                   | *models.UpdateProjectProjectsLogHeaders*                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |