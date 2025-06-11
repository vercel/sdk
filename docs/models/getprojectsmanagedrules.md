# GetProjectsManagedRules

## Example Usage

```typescript
import { GetProjectsManagedRules } from "@vercel/sdk/models/getprojectsop.js";

let value: GetProjectsManagedRules = {
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

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `botFilter`                                                      | [models.GetProjectsBotFilter](../models/getprojectsbotfilter.md) | :heavy_check_mark:                                               | N/A                                                              |
| `aiBots`                                                         | [models.GetProjectsAiBots](../models/getprojectsaibots.md)       | :heavy_check_mark:                                               | N/A                                                              |
| `owasp`                                                          | [models.GetProjectsOwasp](../models/getprojectsowasp.md)         | :heavy_check_mark:                                               | N/A                                                              |