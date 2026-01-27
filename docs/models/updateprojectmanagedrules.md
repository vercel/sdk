# UpdateProjectManagedRules

## Example Usage

```typescript
import { UpdateProjectManagedRules } from "@vercel/sdk/models/updateprojectop.js";

let value: UpdateProjectManagedRules = {
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
    active: true,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `vercelRuleset`                                                              | [models.UpdateProjectVercelRuleset](../models/updateprojectvercelruleset.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `botFilter`                                                                  | [models.UpdateProjectBotFilter](../models/updateprojectbotfilter.md)         | :heavy_check_mark:                                                           | N/A                                                                          |
| `aiBots`                                                                     | [models.UpdateProjectAiBots](../models/updateprojectaibots.md)               | :heavy_check_mark:                                                           | N/A                                                                          |
| `owasp`                                                                      | [models.UpdateProjectOwasp](../models/updateprojectowasp.md)                 | :heavy_check_mark:                                                           | N/A                                                                          |