# UpdateConditionalBypassConditionGroup

## Example Usage

```typescript
import { UpdateConditionalBypassConditionGroup } from "@vercel/sdk/models/updateconditionalbypassop.js";

let value: UpdateConditionalBypassConditionGroup = {
  conditions: [
    {
      type: "path",
      op: "eq",
      value: "<value>",
    },
  ],
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `conditions`                                 | *models.UpdateConditionalBypassConditions*[] | :heavy_check_mark:                           | N/A                                          |