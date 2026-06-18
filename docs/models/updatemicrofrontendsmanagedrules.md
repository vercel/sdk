# UpdateMicrofrontendsManagedRules

## Example Usage

```typescript
import { UpdateMicrofrontendsManagedRules } from "@vercel/sdk/models/updatemicrofrontendsresponsebody.js";

let value: UpdateMicrofrontendsManagedRules = {
  vercelRuleset: {
    active: false,
  },
  trafficSources: {
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

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `vercelRuleset`                                                                              | [models.UpdateMicrofrontendsVercelRuleset](../models/updatemicrofrontendsvercelruleset.md)   | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `trafficSources`                                                                             | [models.UpdateMicrofrontendsTrafficSources](../models/updatemicrofrontendstrafficsources.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `botFilter`                                                                                  | [models.UpdateMicrofrontendsBotFilter](../models/updatemicrofrontendsbotfilter.md)           | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `aiBots`                                                                                     | [models.UpdateMicrofrontendsAiBots](../models/updatemicrofrontendsaibots.md)                 | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `owasp`                                                                                      | [models.UpdateMicrofrontendsOwasp](../models/updatemicrofrontendsowasp.md)                   | :heavy_check_mark:                                                                           | N/A                                                                                          |