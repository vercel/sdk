# GetProjectsResponseBodyProjectsManagedRules

## Example Usage

```typescript
import { GetProjectsResponseBodyProjectsManagedRules } from "@vercel/sdk/models/getprojectsop.js";

let value: GetProjectsResponseBodyProjectsManagedRules = {
  vercelRuleset: {
    active: true,
  },
  botFilter: {
    active: false,
  },
  aiBots: {
    active: false,
  },
  owasp: {
    active: false,
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `vercelRuleset`                                                                                                  | [models.GetProjectsResponseBodyProjectsVercelRuleset](../models/getprojectsresponsebodyprojectsvercelruleset.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `botFilter`                                                                                                      | [models.GetProjectsResponseBodyProjectsBotFilter](../models/getprojectsresponsebodyprojectsbotfilter.md)         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `aiBots`                                                                                                         | [models.GetProjectsResponseBodyProjectsAiBots](../models/getprojectsresponsebodyprojectsaibots.md)               | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `owasp`                                                                                                          | [models.GetProjectsResponseBodyProjectsOwasp](../models/getprojectsresponsebodyprojectsowasp.md)                 | :heavy_check_mark:                                                                                               | N/A                                                                                                              |