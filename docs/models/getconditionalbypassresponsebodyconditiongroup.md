# GetConditionalBypassResponseBodyConditionGroup

## Example Usage

```typescript
import { GetConditionalBypassResponseBodyConditionGroup } from "@vercel/sdk/models/getconditionalbypassop.js";

let value: GetConditionalBypassResponseBodyConditionGroup = {
  conditions: [
    {
      op: "sub",
      type: "ja4_digest",
    },
  ],
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `conditions`                                                                                                   | [models.GetConditionalBypassResponseBodyConditions](../models/getconditionalbypassresponsebodyconditions.md)[] | :heavy_check_mark:                                                                                             | N/A                                                                                                            |