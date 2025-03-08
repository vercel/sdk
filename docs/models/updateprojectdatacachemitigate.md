# UpdateProjectDataCacheMitigate

## Example Usage

```typescript
import { UpdateProjectDataCacheMitigate } from "@vercel/sdk/models/updateprojectdatacacheop.js";

let value: UpdateProjectDataCacheMitigate = {
  action: "redirect",
  ruleId: "<id>",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `action`                                                                                         | [models.UpdateProjectDataCacheProjectsAction](../models/updateprojectdatacacheprojectsaction.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `ruleId`                                                                                         | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `ttl`                                                                                            | *number*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `erl`                                                                                            | [models.Erl](../models/erl.md)                                                                   | :heavy_minus_sign:                                                                               | N/A                                                                                              |