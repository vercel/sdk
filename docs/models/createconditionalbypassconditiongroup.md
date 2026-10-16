# CreateConditionalBypassConditionGroup

## Example Usage

```typescript
import { CreateConditionalBypassConditionGroup } from "@vercel/sdk/models/createconditionalbypassop.js";

let value: CreateConditionalBypassConditionGroup = {
  conditions: [
    {
      type: "header",
      op: "ex",
      key: "<key>",
    },
  ],
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `conditions`                                 | *models.CreateConditionalBypassConditions*[] | :heavy_check_mark:                           | N/A                                          |