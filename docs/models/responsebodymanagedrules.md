# ResponseBodyManagedRules

## Example Usage

```typescript
import { ResponseBodyManagedRules } from "@vercel/sdk/models/getprojectsresponsebody.js";

let value: ResponseBodyManagedRules = {
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
    active: true,
  },
  vercelRuleset: {
    active: true,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `aiBots`                                                                     | [models.ResponseBodyAiBots](../models/responsebodyaibots.md)                 | :heavy_check_mark:                                                           | N/A                                                                          |
| `botFilter`                                                                  | [models.ResponseBodyBotFilter](../models/responsebodybotfilter.md)           | :heavy_check_mark:                                                           | N/A                                                                          |
| `owasp`                                                                      | [models.ResponseBodyOwasp](../models/responsebodyowasp.md)                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `trafficSources`                                                             | [models.ResponseBodyTrafficSources](../models/responsebodytrafficsources.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `vercelRuleset`                                                              | [models.ResponseBodyVercelRuleset](../models/responsebodyvercelruleset.md)   | :heavy_check_mark:                                                           | N/A                                                                          |