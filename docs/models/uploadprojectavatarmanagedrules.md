# UploadProjectAvatarManagedRules

## Example Usage

```typescript
import { UploadProjectAvatarManagedRules } from "@vercel/sdk/models/uploadprojectavatartracing.js";

let value: UploadProjectAvatarManagedRules = {
  vercelRuleset: {
    active: false,
  },
  trafficSources: {
    active: false,
  },
  botFilter: {
    active: false,
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
| `vercelRuleset`                                                                            | [models.UploadProjectAvatarVercelRuleset](../models/uploadprojectavatarvercelruleset.md)   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `trafficSources`                                                                           | [models.UploadProjectAvatarTrafficSources](../models/uploadprojectavatartrafficsources.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `botFilter`                                                                                | [models.UploadProjectAvatarBotFilter](../models/uploadprojectavatarbotfilter.md)           | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `aiBots`                                                                                   | [models.UploadProjectAvatarAiBots](../models/uploadprojectavataraibots.md)                 | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `owasp`                                                                                    | [models.UploadProjectAvatarOwasp](../models/uploadprojectavatarowasp.md)                   | :heavy_check_mark:                                                                         | N/A                                                                                        |