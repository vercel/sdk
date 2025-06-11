# CreateProjectManagedRules

## Example Usage

```typescript
import { CreateProjectManagedRules } from "@vercel/sdk/models/createprojectop.js";

let value: CreateProjectManagedRules = {
  botFilter: {
    active: true,
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

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `botFilter`                                                          | [models.CreateProjectBotFilter](../models/createprojectbotfilter.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `aiBots`                                                             | [models.CreateProjectAiBots](../models/createprojectaibots.md)       | :heavy_check_mark:                                                   | N/A                                                                  |
| `owasp`                                                              | [models.CreateProjectOwasp](../models/createprojectowasp.md)         | :heavy_check_mark:                                                   | N/A                                                                  |