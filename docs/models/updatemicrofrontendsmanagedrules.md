# UpdateMicrofrontendsManagedRules

## Example Usage

```typescript
import { UpdateMicrofrontendsManagedRules } from "@vercel/sdk/models/updatemicrofrontendsfrom1.js";

let value: UpdateMicrofrontendsManagedRules = {
  aiBots: {
    active: false,
  },
  botFilter: {
    active: true,
  },
  owasp: {
    active: false,
  },
  trafficSources: {
    active: false,
  },
  vercelRuleset: {
    active: true,
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `aiBots`                                                                                     | [models.UpdateMicrofrontendsAiBots](../models/updatemicrofrontendsaibots.md)                 | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `botFilter`                                                                                  | [models.UpdateMicrofrontendsBotFilter](../models/updatemicrofrontendsbotfilter.md)           | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `owasp`                                                                                      | [models.UpdateMicrofrontendsOwasp](../models/updatemicrofrontendsowasp.md)                   | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `trafficSources`                                                                             | [models.UpdateMicrofrontendsTrafficSources](../models/updatemicrofrontendstrafficsources.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `vercelRuleset`                                                                              | [models.UpdateMicrofrontendsVercelRuleset](../models/updatemicrofrontendsvercelruleset.md)   | :heavy_check_mark:                                                                           | N/A                                                                                          |