# UpdateProjectManagedRules

## Example Usage

```typescript
import { UpdateProjectManagedRules } from "@vercel/sdk/models/updateprojectprojectsaction.js";

let value: UpdateProjectManagedRules = {
  vercelRuleset: {
    active: true,
  },
  trafficSources: {
    active: false,
  },
  botFilter: {
    active: false,
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
| `vercelRuleset`                                                                | [models.UpdateProjectVercelRuleset](../models/updateprojectvercelruleset.md)   | :heavy_check_mark:                                                             | N/A                                                                            |
| `trafficSources`                                                               | [models.UpdateProjectTrafficSources](../models/updateprojecttrafficsources.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `botFilter`                                                                    | [models.UpdateProjectBotFilter](../models/updateprojectbotfilter.md)           | :heavy_check_mark:                                                             | N/A                                                                            |
| `aiBots`                                                                       | [models.UpdateProjectAiBots](../models/updateprojectaibots.md)                 | :heavy_check_mark:                                                             | N/A                                                                            |
| `owasp`                                                                        | [models.UpdateProjectOwasp](../models/updateprojectowasp.md)                   | :heavy_check_mark:                                                             | N/A                                                                            |