# CreateFlagRhs3

## Example Usage

```typescript
import { CreateFlagRhs3 } from "@vercel/sdk/models/createflagop.js";

let value: CreateFlagRhs3 = {
  items: [
    {
      value: "<value>",
    },
  ],
  type: "list",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `items`                                                                            | *models.CreateFlagRhsFeatureFlagsItems*[]                                          | :heavy_check_mark:                                                                 | N/A                                                                                |
| `type`                                                                             | [models.CreateFlagRhsFeatureFlagsType](../models/createflagrhsfeatureflagstype.md) | :heavy_check_mark:                                                                 | N/A                                                                                |