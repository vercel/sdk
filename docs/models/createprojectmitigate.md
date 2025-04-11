# CreateProjectMitigate

## Example Usage

```typescript
import { CreateProjectMitigate } from "@vercel/sdk/models/createprojectop.js";

let value: CreateProjectMitigate = {
  action: "rate_limit",
  ruleId: "<id>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `action`                                                                       | [models.CreateProjectProjectsAction](../models/createprojectprojectsaction.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `ruleId`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `ttl`                                                                          | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `erl`                                                                          | [models.CreateProjectErl](../models/createprojecterl.md)                       | :heavy_minus_sign:                                                             | N/A                                                                            |