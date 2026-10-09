# DeleteProjectAvatarManagedRules

## Example Usage

```typescript
import { DeleteProjectAvatarManagedRules } from "@vercel/sdk/models/deleteprojectavatarresponsebody.js";

let value: DeleteProjectAvatarManagedRules = {
  aiBots: {
    active: true,
  },
  botFilter: {
    active: true,
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

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `aiBots`                                                                                   | [models.DeleteProjectAvatarAiBots](../models/deleteprojectavataraibots.md)                 | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `botFilter`                                                                                | [models.DeleteProjectAvatarBotFilter](../models/deleteprojectavatarbotfilter.md)           | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `owasp`                                                                                    | [models.DeleteProjectAvatarOwasp](../models/deleteprojectavatarowasp.md)                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `trafficSources`                                                                           | [models.DeleteProjectAvatarTrafficSources](../models/deleteprojectavatartrafficsources.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `vercelRuleset`                                                                            | [models.DeleteProjectAvatarVercelRuleset](../models/deleteprojectavatarvercelruleset.md)   | :heavy_check_mark:                                                                         | N/A                                                                                        |