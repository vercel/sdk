# GetProjectsResponseBodyManagedRules

## Example Usage

```typescript
import { GetProjectsResponseBodyManagedRules } from "@vercel/sdk/models/getprojectsop.js";

let value: GetProjectsResponseBodyManagedRules = {
  vercelRuleset: {
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

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `vercelRuleset`                                                                                  | [models.GetProjectsResponseBodyVercelRuleset](../models/getprojectsresponsebodyvercelruleset.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `botFilter`                                                                                      | [models.GetProjectsResponseBodyBotFilter](../models/getprojectsresponsebodybotfilter.md)         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `aiBots`                                                                                         | [models.GetProjectsResponseBodyAiBots](../models/getprojectsresponsebodyaibots.md)               | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `owasp`                                                                                          | [models.GetProjectsResponseBodyOwasp](../models/getprojectsresponsebodyowasp.md)                 | :heavy_check_mark:                                                                               | N/A                                                                                              |