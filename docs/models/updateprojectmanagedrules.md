# UpdateProjectManagedRules

## Example Usage

```typescript
import { UpdateProjectManagedRules } from "@vercel/sdk/models/updateprojectresponsebody.js";

let value: UpdateProjectManagedRules = {
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
| `aiBots`                                                                       | [models.UpdateProjectAiBots](../models/updateprojectaibots.md)                 | :heavy_check_mark:                                                             | N/A                                                                            |
| `botFilter`                                                                    | [models.UpdateProjectBotFilter](../models/updateprojectbotfilter.md)           | :heavy_check_mark:                                                             | N/A                                                                            |
| `owasp`                                                                        | [models.UpdateProjectOwasp](../models/updateprojectowasp.md)                   | :heavy_check_mark:                                                             | N/A                                                                            |
| `trafficSources`                                                               | [models.UpdateProjectTrafficSources](../models/updateprojecttrafficsources.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `vercelRuleset`                                                                | [models.UpdateProjectVercelRuleset](../models/updateprojectvercelruleset.md)   | :heavy_check_mark:                                                             | N/A                                                                            |