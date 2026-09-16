# CreateProjectManagedRules

## Example Usage

```typescript
import { CreateProjectManagedRules } from "@vercel/sdk/models/createprojecttargets.js";

let value: CreateProjectManagedRules = {
  aiBots: {
    active: true,
  },
  botFilter: {
    active: false,
  },
  owasp: {
    active: true,
  },
  trafficSources: {
    active: true,
  },
  vercelRuleset: {
    active: false,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `aiBots`                                                                       | [models.CreateProjectAiBots](../models/createprojectaibots.md)                 | :heavy_check_mark:                                                             | N/A                                                                            |
| `botFilter`                                                                    | [models.BotFilter](../models/botfilter.md)                                     | :heavy_check_mark:                                                             | N/A                                                                            |
| `owasp`                                                                        | [models.CreateProjectOwasp](../models/createprojectowasp.md)                   | :heavy_check_mark:                                                             | N/A                                                                            |
| `trafficSources`                                                               | [models.CreateProjectTrafficSources](../models/createprojecttrafficsources.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `vercelRuleset`                                                                | [models.CreateProjectVercelRuleset](../models/createprojectvercelruleset.md)   | :heavy_check_mark:                                                             | N/A                                                                            |