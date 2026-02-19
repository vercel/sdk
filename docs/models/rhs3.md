# Rhs3

## Example Usage

```typescript
import { Rhs3 } from "@vercel/sdk/models/flag.js";

let value: Rhs3 = {
  type: "list/inline",
  items: [
    {
      value: "<value>",
    },
  ],
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `type`                                 | [models.RhsType](../models/rhstype.md) | :heavy_check_mark:                     | N/A                                    |
| `items`                                | *models.RhsItems*[]                    | :heavy_check_mark:                     | N/A                                    |