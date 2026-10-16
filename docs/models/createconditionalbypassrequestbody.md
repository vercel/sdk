# CreateConditionalBypassRequestBody

## Example Usage

```typescript
import { CreateConditionalBypassRequestBody } from "@vercel/sdk/models/createconditionalbypassop.js";

let value: CreateConditionalBypassRequestBody = {
  domain: "frilly-elevation.biz",
  conditionGroup: [],
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `domain`                                                                                             | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `conditionGroup`                                                                                     | [models.CreateConditionalBypassConditionGroup](../models/createconditionalbypassconditiongroup.md)[] | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `note`                                                                                               | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |