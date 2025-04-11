# UpdateProjectMitigate

## Example Usage

```typescript
import { UpdateProjectMitigate } from "@vercel/sdk/models/updateprojectop.js";

let value: UpdateProjectMitigate = {
  action: "log",
  ruleId: "<id>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `action`                                                                       | [models.UpdateProjectProjectsAction](../models/updateprojectprojectsaction.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `ruleId`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `ttl`                                                                          | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `erl`                                                                          | [models.UpdateProjectErl](../models/updateprojecterl.md)                       | :heavy_minus_sign:                                                             | N/A                                                                            |