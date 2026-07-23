# CreateProjectManagedRules

## Example Usage

```typescript
import { CreateProjectManagedRules } from "@vercel/sdk/models/createprojecthasprojectsvalue.js";

let value: CreateProjectManagedRules = {
  vercelRuleset: {
    active: true,
  },
  trafficSources: {
    active: false,
  },
  botFilter: {
    active: true,
  },
  aiBots: {
    active: true,
  },
  owasp: {
    active: false,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `vercelRuleset`                                                                | [models.CreateProjectVercelRuleset](../models/createprojectvercelruleset.md)   | :heavy_check_mark:                                                             | N/A                                                                            |
| `trafficSources`                                                               | [models.CreateProjectTrafficSources](../models/createprojecttrafficsources.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `botFilter`                                                                    | [models.BotFilter](../models/botfilter.md)                                     | :heavy_check_mark:                                                             | N/A                                                                            |
| `aiBots`                                                                       | [models.CreateProjectAiBots](../models/createprojectaibots.md)                 | :heavy_check_mark:                                                             | N/A                                                                            |
| `owasp`                                                                        | [models.CreateProjectOwasp](../models/createprojectowasp.md)                   | :heavy_check_mark:                                                             | N/A                                                                            |