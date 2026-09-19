# GetMicrofrontendsInGroupManagedRules

## Example Usage

```typescript
import { GetMicrofrontendsInGroupManagedRules } from "@vercel/sdk/models/getmicrofrontendsingroupfrom.js";

let value: GetMicrofrontendsInGroupManagedRules = {
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
    active: true,
  },
  vercelRuleset: {
    active: false,
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `aiBots`                                                                                             | [models.GetMicrofrontendsInGroupAiBots](../models/getmicrofrontendsingroupaibots.md)                 | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `botFilter`                                                                                          | [models.GetMicrofrontendsInGroupBotFilter](../models/getmicrofrontendsingroupbotfilter.md)           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `owasp`                                                                                              | [models.GetMicrofrontendsInGroupOwasp](../models/getmicrofrontendsingroupowasp.md)                   | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `trafficSources`                                                                                     | [models.GetMicrofrontendsInGroupTrafficSources](../models/getmicrofrontendsingrouptrafficsources.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `vercelRuleset`                                                                                      | [models.GetMicrofrontendsInGroupVercelRuleset](../models/getmicrofrontendsingroupvercelruleset.md)   | :heavy_check_mark:                                                                                   | N/A                                                                                                  |