# ResponseBodyRules

## Example Usage

```typescript
import { ResponseBodyRules } from "@vercel/sdk/models/getconditionalbypassop.js";

let value: ResponseBodyRules = {
  condition: "<value>",
  conditionGroup: [
    {
      conditions: [],
    },
  ],
  createdAt: "1711888983344",
  domain: "trusty-cop-out.biz",
  id: "<id>",
  projectId: "<id>",
  updatedAt: "1735625032627",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `condition`                                                                                                            | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `conditionGroup`                                                                                                       | [models.GetConditionalBypassResponseBodyConditionGroup](../models/getconditionalbypassresponsebodyconditiongroup.md)[] | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `createdAt`                                                                                                            | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `domain`                                                                                                               | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `id`                                                                                                                   | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `note`                                                                                                                 | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `projectId`                                                                                                            | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `updatedAt`                                                                                                            | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |