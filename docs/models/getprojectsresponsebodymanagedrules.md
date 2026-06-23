# GetProjectsResponseBodyManagedRules

## Example Usage

```typescript
import { GetProjectsResponseBodyManagedRules } from "@vercel/sdk/models/getprojectscontenthint11.js";

let value: GetProjectsResponseBodyManagedRules = {
  vercelRuleset: {
    active: false,
  },
  trafficSources: {
    active: false,
  },
  botFilter: {
    active: false,
  },
  aiBots: {
    active: true,
  },
  owasp: {
    active: true,
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `vercelRuleset`                                                                                    | [models.GetProjectsResponseBodyVercelRuleset](../models/getprojectsresponsebodyvercelruleset.md)   | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `trafficSources`                                                                                   | [models.GetProjectsResponseBodyTrafficSources](../models/getprojectsresponsebodytrafficsources.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `botFilter`                                                                                        | [models.GetProjectsResponseBodyBotFilter](../models/getprojectsresponsebodybotfilter.md)           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `aiBots`                                                                                           | [models.GetProjectsResponseBodyAiBots](../models/getprojectsresponsebodyaibots.md)                 | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `owasp`                                                                                            | [models.GetProjectsResponseBodyOwasp](../models/getprojectsresponsebodyowasp.md)                   | :heavy_check_mark:                                                                                 | N/A                                                                                                |