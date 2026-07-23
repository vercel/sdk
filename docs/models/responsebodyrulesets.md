# ResponseBodyRulesets

## Example Usage

```typescript
import { ResponseBodyRulesets } from "@vercel/sdk/models/getprojectsblockhistoryprojectsroute.js";

let value: ResponseBodyRulesets = {
  action: "redirect",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `action`                                                                                                                 | [models.GetProjectsResponseBodyProjectsResponse200Action](../models/getprojectsresponsebodyprojectsresponse200action.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `rateLimit`                                                                                                              | [models.ResponseBodyRateLimit](../models/responsebodyratelimit.md)                                                       | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `redirect`                                                                                                               | [models.ResponseBodyRedirect](../models/responsebodyredirect.md)                                                         | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `actionDuration`                                                                                                         | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `bypassSystem`                                                                                                           | *boolean*                                                                                                                | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `logHeaders`                                                                                                             | *models.GetProjectsResponseBodyLogHeaders*                                                                               | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |