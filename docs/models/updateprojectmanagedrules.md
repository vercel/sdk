# UpdateProjectManagedRules

## Example Usage

```typescript
import { UpdateProjectManagedRules } from "@vercel/sdk/models/updateprojectop.js";

let value: UpdateProjectManagedRules = {
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

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `botFilter`                                                          | [models.UpdateProjectBotFilter](../models/updateprojectbotfilter.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `aiBots`                                                             | [models.UpdateProjectAiBots](../models/updateprojectaibots.md)       | :heavy_check_mark:                                                   | N/A                                                                  |
| `owasp`                                                              | [models.UpdateProjectOwasp](../models/updateprojectowasp.md)         | :heavy_check_mark:                                                   | N/A                                                                  |