# Base

## Example Usage

```typescript
import { Base } from "@vercel/sdk/models/flag.js";

let value: Base = {
  attribute: "<value>",
  kind: "<value>",
  type: "entity",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `attribute`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `kind`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `type`                                                                                   | [models.FlagFallthroughEnvironments2Type](../models/flagfallthroughenvironments2type.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |