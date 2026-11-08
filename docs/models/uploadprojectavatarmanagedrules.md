# UploadProjectAvatarManagedRules

## Example Usage

```typescript
import { UploadProjectAvatarManagedRules } from "@vercel/sdk/models/uploadprojectavatarfrom1.js";

let value: UploadProjectAvatarManagedRules = {
  aiBots: {
    active: false,
  },
  botFilter: {
    active: false,
  },
  owasp: {
    active: false,
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

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `aiBots`                                                                                   | [models.UploadProjectAvatarAiBots](../models/uploadprojectavataraibots.md)                 | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `botFilter`                                                                                | [models.UploadProjectAvatarBotFilter](../models/uploadprojectavatarbotfilter.md)           | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `owasp`                                                                                    | [models.UploadProjectAvatarOwasp](../models/uploadprojectavatarowasp.md)                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `trafficSources`                                                                           | [models.UploadProjectAvatarTrafficSources](../models/uploadprojectavatartrafficsources.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `vercelRuleset`                                                                            | [models.UploadProjectAvatarVercelRuleset](../models/uploadprojectavatarvercelruleset.md)   | :heavy_check_mark:                                                                         | N/A                                                                                        |