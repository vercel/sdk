# Types

## Example Usage

```typescript
import { Types } from "@vercel/sdk/models/listeventtypesop.js";

let value: Types = {
  replacedBy: [
    "<value 1>",
  ],
  deprecated: true,
  name: "ai-code-review",
  description: "charlatan stunning obedient help meanwhile throughout",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `replacedBy`                                                 | *string*[]                                                   | :heavy_check_mark:                                           | N/A                                                          |
| `deprecated`                                                 | *boolean*                                                    | :heavy_check_mark:                                           | N/A                                                          |
| `name`                                                       | [models.ListEventTypesName](../models/listeventtypesname.md) | :heavy_check_mark:                                           | N/A                                                          |
| `description`                                                | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |