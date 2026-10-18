# ResponseBodyConditionGroup

## Example Usage

```typescript
import { ResponseBodyConditionGroup } from "@vercel/sdk/models/getconditionalbypassop.js";

let value: ResponseBodyConditionGroup = {
  conditions: [
    {
      op: "lt",
      type: "region",
    },
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `conditions`                                                           | [models.ResponseBodyConditions](../models/responsebodyconditions.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |