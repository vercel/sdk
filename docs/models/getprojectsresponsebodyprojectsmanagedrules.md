# GetProjectsResponseBodyProjectsManagedRules

## Example Usage

```typescript
import { GetProjectsResponseBodyProjectsManagedRules } from "@vercel/sdk/models/getprojectsresponsebodyprojectsoidcproviders.js";

let value: GetProjectsResponseBodyProjectsManagedRules = {
  aiBots: {
    active: true,
  },
  botFilter: {
    active: false,
  },
  owasp: {
    active: false,
  },
  trafficSources: {
    active: false,
  },
  vercelRuleset: {
    active: true,
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `aiBots`                                                                                                           | [models.GetProjectsResponseBodyProjectsAiBots](../models/getprojectsresponsebodyprojectsaibots.md)                 | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `botFilter`                                                                                                        | [models.GetProjectsResponseBodyProjectsBotFilter](../models/getprojectsresponsebodyprojectsbotfilter.md)           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `owasp`                                                                                                            | [models.GetProjectsResponseBodyProjectsOwasp](../models/getprojectsresponsebodyprojectsowasp.md)                   | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `trafficSources`                                                                                                   | [models.GetProjectsResponseBodyProjectsTrafficSources](../models/getprojectsresponsebodyprojectstrafficsources.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `vercelRuleset`                                                                                                    | [models.GetProjectsResponseBodyProjectsVercelRuleset](../models/getprojectsresponsebodyprojectsvercelruleset.md)   | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |