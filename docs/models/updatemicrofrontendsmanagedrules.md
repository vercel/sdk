# UpdateMicrofrontendsManagedRules

## Example Usage

```typescript
import { UpdateMicrofrontendsManagedRules } from "@vercel/sdk/models/updatemicrofrontendsop.js";

let value: UpdateMicrofrontendsManagedRules = {
  vercelRuleset: {
    active: false,
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

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `vercelRuleset`                                                                            | [models.UpdateMicrofrontendsVercelRuleset](../models/updatemicrofrontendsvercelruleset.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `botFilter`                                                                                | [models.UpdateMicrofrontendsBotFilter](../models/updatemicrofrontendsbotfilter.md)         | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `aiBots`                                                                                   | [models.UpdateMicrofrontendsAiBots](../models/updatemicrofrontendsaibots.md)               | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `owasp`                                                                                    | [models.UpdateMicrofrontendsOwasp](../models/updatemicrofrontendsowasp.md)                 | :heavy_check_mark:                                                                         | N/A                                                                                        |