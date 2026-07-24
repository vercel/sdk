# GetProjectManagedRules

## Example Usage

```typescript
import { GetProjectManagedRules } from "@vercel/sdk/models/getprojectdestination.js";

let value: GetProjectManagedRules = {
  vercelRuleset: {
    active: true,
  },
  trafficSources: {
    active: true,
  },
  botFilter: {
    active: true,
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

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `vercelRuleset`                                                          | [models.GetProjectVercelRuleset](../models/getprojectvercelruleset.md)   | :heavy_check_mark:                                                       | N/A                                                                      |
| `trafficSources`                                                         | [models.GetProjectTrafficSources](../models/getprojecttrafficsources.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `botFilter`                                                              | [models.GetProjectBotFilter](../models/getprojectbotfilter.md)           | :heavy_check_mark:                                                       | N/A                                                                      |
| `aiBots`                                                                 | [models.GetProjectAiBots](../models/getprojectaibots.md)                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `owasp`                                                                  | [models.GetProjectOwasp](../models/getprojectowasp.md)                   | :heavy_check_mark:                                                       | N/A                                                                      |