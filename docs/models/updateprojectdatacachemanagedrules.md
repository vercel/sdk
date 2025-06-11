# UpdateProjectDataCacheManagedRules

## Example Usage

```typescript
import { UpdateProjectDataCacheManagedRules } from "@vercel/sdk/models/updateprojectdatacacheop.js";

let value: UpdateProjectDataCacheManagedRules = {
  botFilter: {
    active: false,
  },
  aiBots: {
    active: true,
  },
  owasp: {
    active: false,
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `botFilter`                                                                      | [models.BotFilter](../models/botfilter.md)                                       | :heavy_check_mark:                                                               | N/A                                                                              |
| `aiBots`                                                                         | [models.UpdateProjectDataCacheAiBots](../models/updateprojectdatacacheaibots.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `owasp`                                                                          | [models.UpdateProjectDataCacheOwasp](../models/updateprojectdatacacheowasp.md)   | :heavy_check_mark:                                                               | N/A                                                                              |