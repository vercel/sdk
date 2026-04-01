# GetMicrofrontendsInGroupManagedRules

## Example Usage

```typescript
import { GetMicrofrontendsInGroupManagedRules } from "@vercel/sdk/models/getmicrofrontendsingroupkind.js";

let value: GetMicrofrontendsInGroupManagedRules = {
  vercelRuleset: {
    active: true,
  },
  botFilter: {
    active: true,
  },
  aiBots: {
    active: true,
  },
  owasp: {
    active: true,
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `vercelRuleset`                                                                                    | [models.GetMicrofrontendsInGroupVercelRuleset](../models/getmicrofrontendsingroupvercelruleset.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `botFilter`                                                                                        | [models.GetMicrofrontendsInGroupBotFilter](../models/getmicrofrontendsingroupbotfilter.md)         | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `aiBots`                                                                                           | [models.GetMicrofrontendsInGroupAiBots](../models/getmicrofrontendsingroupaibots.md)               | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `owasp`                                                                                            | [models.GetMicrofrontendsInGroupOwasp](../models/getmicrofrontendsingroupowasp.md)                 | :heavy_check_mark:                                                                                 | N/A                                                                                                |