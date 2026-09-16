# OutcomeBase

## Example Usage

```typescript
import { OutcomeBase } from "@vercel/sdk/models/flag.js";

let value: OutcomeBase = {
  attribute: "<value>",
  kind: "<value>",
  type: "entity",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `attribute`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `kind`                                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `type`                                                                                     | [models.FlagOutcomeEnvironmentsRules2Type](../models/flagoutcomeenvironmentsrules2type.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |