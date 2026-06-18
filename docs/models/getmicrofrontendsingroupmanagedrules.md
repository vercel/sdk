# GetMicrofrontendsInGroupManagedRules

## Example Usage

```typescript
import { GetMicrofrontendsInGroupManagedRules } from "@vercel/sdk/models/getmicrofrontendsingroupresponsebody.js";

let value: GetMicrofrontendsInGroupManagedRules = {
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
    active: true,
  },
  owasp: {
    active: false,
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `vercelRuleset`                                                                                      | [models.GetMicrofrontendsInGroupVercelRuleset](../models/getmicrofrontendsingroupvercelruleset.md)   | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `trafficSources`                                                                                     | [models.GetMicrofrontendsInGroupTrafficSources](../models/getmicrofrontendsingrouptrafficsources.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `botFilter`                                                                                          | [models.GetMicrofrontendsInGroupBotFilter](../models/getmicrofrontendsingroupbotfilter.md)           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `aiBots`                                                                                             | [models.GetMicrofrontendsInGroupAiBots](../models/getmicrofrontendsingroupaibots.md)                 | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `owasp`                                                                                              | [models.GetMicrofrontendsInGroupOwasp](../models/getmicrofrontendsingroupowasp.md)                   | :heavy_check_mark:                                                                                   | N/A                                                                                                  |