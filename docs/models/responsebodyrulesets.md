# ResponseBodyRulesets

## Example Usage

```typescript
import { ResponseBodyRulesets } from "@vercel/sdk/models/getprojectsresponsebody.js";

let value: ResponseBodyRulesets = {
  action: "redirect",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `action`                                                                                                           | [models.GetProjectsResponseBodyProjectsResponseAction](../models/getprojectsresponsebodyprojectsresponseaction.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `actionDuration`                                                                                                   | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `bypassSystem`                                                                                                     | *boolean*                                                                                                          | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `logHeaders`                                                                                                       | *models.GetProjectsResponseBodyLogHeaders*                                                                         | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `rateLimit`                                                                                                        | [models.ResponseBodyRateLimit](../models/responsebodyratelimit.md)                                                 | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `redirect`                                                                                                         | [models.ResponseBodyRedirect](../models/responsebodyredirect.md)                                                   | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |