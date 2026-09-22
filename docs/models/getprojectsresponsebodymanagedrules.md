# GetProjectsResponseBodyManagedRules

## Example Usage

```typescript
import { GetProjectsResponseBodyManagedRules } from "@vercel/sdk/models/responsebodyblockhistory.js";

let value: GetProjectsResponseBodyManagedRules = {
  aiBots: {
    active: false,
  },
  botFilter: {
    active: false,
  },
  owasp: {
    active: false,
  },
  trafficSources: {
    active: true,
  },
  vercelRuleset: {
    active: true,
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `aiBots`                                                                                           | [models.GetProjectsResponseBodyAiBots](../models/getprojectsresponsebodyaibots.md)                 | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `botFilter`                                                                                        | [models.GetProjectsResponseBodyBotFilter](../models/getprojectsresponsebodybotfilter.md)           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `owasp`                                                                                            | [models.GetProjectsResponseBodyOwasp](../models/getprojectsresponsebodyowasp.md)                   | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `trafficSources`                                                                                   | [models.GetProjectsResponseBodyTrafficSources](../models/getprojectsresponsebodytrafficsources.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `vercelRuleset`                                                                                    | [models.GetProjectsResponseBodyVercelRuleset](../models/getprojectsresponsebodyvercelruleset.md)   | :heavy_check_mark:                                                                                 | N/A                                                                                                |