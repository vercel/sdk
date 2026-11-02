# UpdateConditionalBypassResponseBody

## Example Usage

```typescript
import { UpdateConditionalBypassResponseBody } from "@vercel/sdk/models/updateconditionalbypassop.js";

let value: UpdateConditionalBypassResponseBody = {
  condition: "<value>",
  conditionGroup: [
    {
      conditions: [
        {
          op: "gt",
          type: "ip_address",
        },
      ],
    },
  ],
  createdAt: "1733580446135",
  domain: "unused-council.biz",
  id: "<id>",
  projectId: "<id>",
  updatedAt: "1735659712847",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `condition`                                                                                                          | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `conditionGroup`                                                                                                     | [models.UpdateConditionalBypassSecurityConditionGroup](../models/updateconditionalbypasssecurityconditiongroup.md)[] | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `createdAt`                                                                                                          | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `domain`                                                                                                             | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `id`                                                                                                                 | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `note`                                                                                                               | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `projectId`                                                                                                          | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `updatedAt`                                                                                                          | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |