# GetProjectsResponseBodyProjectsManagedRules

## Example Usage

```typescript
import { GetProjectsResponseBodyProjectsManagedRules } from "@vercel/sdk/models/getprojectsresponsebodylink.js";

let value: GetProjectsResponseBodyProjectsManagedRules = {
  vercelRuleset: {
    active: true,
  },
  trafficSources: {
    active: false,
  },
  botFilter: {
    active: false,
  },
  aiBots: {
    active: false,
  },
  owasp: {
    active: true,
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `vercelRuleset`                                                                                                    | [models.GetProjectsResponseBodyProjectsVercelRuleset](../models/getprojectsresponsebodyprojectsvercelruleset.md)   | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `trafficSources`                                                                                                   | [models.GetProjectsResponseBodyProjectsTrafficSources](../models/getprojectsresponsebodyprojectstrafficsources.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `botFilter`                                                                                                        | [models.GetProjectsResponseBodyProjectsBotFilter](../models/getprojectsresponsebodyprojectsbotfilter.md)           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `aiBots`                                                                                                           | [models.GetProjectsResponseBodyProjectsAiBots](../models/getprojectsresponsebodyprojectsaibots.md)                 | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `owasp`                                                                                                            | [models.GetProjectsResponseBodyProjectsOwasp](../models/getprojectsresponsebodyprojectsowasp.md)                   | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |