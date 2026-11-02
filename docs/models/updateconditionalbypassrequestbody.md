# UpdateConditionalBypassRequestBody

## Example Usage

```typescript
import { UpdateConditionalBypassRequestBody } from "@vercel/sdk/models/updateconditionalbypassop.js";

let value: UpdateConditionalBypassRequestBody = {
  domain: "purple-bandwidth.biz",
  conditionGroup: [
    {
      conditions: [
        {
          type: "header",
          op: "pre",
          key: "<key>",
          value: "<value>",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `domain`                                                                                             | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `conditionGroup`                                                                                     | [models.UpdateConditionalBypassConditionGroup](../models/updateconditionalbypassconditiongroup.md)[] | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `note`                                                                                               | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |