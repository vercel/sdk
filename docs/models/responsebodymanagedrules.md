# ResponseBodyManagedRules

## Example Usage

```typescript
import { ResponseBodyManagedRules } from "@vercel/sdk/models/getprojectsrouteprojects1.js";

let value: ResponseBodyManagedRules = {
  vercelRuleset: {
    active: false,
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

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `vercelRuleset`                                                            | [models.ResponseBodyVercelRuleset](../models/responsebodyvercelruleset.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `botFilter`                                                                | [models.ResponseBodyBotFilter](../models/responsebodybotfilter.md)         | :heavy_check_mark:                                                         | N/A                                                                        |
| `aiBots`                                                                   | [models.ResponseBodyAiBots](../models/responsebodyaibots.md)               | :heavy_check_mark:                                                         | N/A                                                                        |
| `owasp`                                                                    | [models.ResponseBodyOwasp](../models/responsebodyowasp.md)                 | :heavy_check_mark:                                                         | N/A                                                                        |