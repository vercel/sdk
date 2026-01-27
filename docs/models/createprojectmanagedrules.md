# CreateProjectManagedRules

## Example Usage

```typescript
import { CreateProjectManagedRules } from "@vercel/sdk/models/createprojectop.js";

let value: CreateProjectManagedRules = {
  vercelRuleset: {
    active: true,
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

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `vercelRuleset`                                                              | [models.CreateProjectVercelRuleset](../models/createprojectvercelruleset.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `botFilter`                                                                  | [models.BotFilter](../models/botfilter.md)                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `aiBots`                                                                     | [models.CreateProjectAiBots](../models/createprojectaibots.md)               | :heavy_check_mark:                                                           | N/A                                                                          |
| `owasp`                                                                      | [models.CreateProjectOwasp](../models/createprojectowasp.md)                 | :heavy_check_mark:                                                           | N/A                                                                          |