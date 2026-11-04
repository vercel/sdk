# GetProjectManagedRules

## Example Usage

```typescript
import { GetProjectManagedRules } from "@vercel/sdk/models/getprojectfrompreset.js";

let value: GetProjectManagedRules = {
  aiBots: {
    active: true,
  },
  botFilter: {
    active: true,
  },
  owasp: {
    active: true,
  },
  trafficSources: {
    active: false,
  },
  vercelRuleset: {
    active: false,
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `aiBots`                                                                 | [models.GetProjectAiBots](../models/getprojectaibots.md)                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `botFilter`                                                              | [models.GetProjectBotFilter](../models/getprojectbotfilter.md)           | :heavy_check_mark:                                                       | N/A                                                                      |
| `owasp`                                                                  | [models.GetProjectOwasp](../models/getprojectowasp.md)                   | :heavy_check_mark:                                                       | N/A                                                                      |
| `trafficSources`                                                         | [models.GetProjectTrafficSources](../models/getprojecttrafficsources.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `vercelRuleset`                                                          | [models.GetProjectVercelRuleset](../models/getprojectvercelruleset.md)   | :heavy_check_mark:                                                       | N/A                                                                      |