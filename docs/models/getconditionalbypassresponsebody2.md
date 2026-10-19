# GetConditionalBypassResponseBody2

## Example Usage

```typescript
import { GetConditionalBypassResponseBody2 } from "@vercel/sdk/models/getconditionalbypassop.js";

let value: GetConditionalBypassResponseBody2 = {
  rules: [
    {
      condition: "<value>",
      conditionGroup: [
        {
          conditions: [],
        },
      ],
      createdAt: "1732509291835",
      domain: "thorough-unibody.name",
      id: "<id>",
      projectId: "<id>",
      updatedAt: "1735674161939",
    },
  ],
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `rules`                                                      | [models.ResponseBodyRules](../models/responsebodyrules.md)[] | :heavy_check_mark:                                           | N/A                                                          |