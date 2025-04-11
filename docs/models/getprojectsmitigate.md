# GetProjectsMitigate

## Example Usage

```typescript
import { GetProjectsMitigate } from "@vercel/sdk/models/getprojectsop.js";

let value: GetProjectsMitigate = {
  action: "deny",
  ruleId: "<id>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `action`                                                                   | [models.GetProjectsProjectsAction](../models/getprojectsprojectsaction.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `ruleId`                                                                   | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `ttl`                                                                      | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `erl`                                                                      | [models.GetProjectsErl](../models/getprojectserl.md)                       | :heavy_minus_sign:                                                         | N/A                                                                        |