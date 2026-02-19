# PausedOutcome

## Example Usage

```typescript
import { PausedOutcome } from "@vercel/sdk/models/flag.js";

let value: PausedOutcome = {
  type: "variant",
  variantId: "<id>",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `type`                                   | [models.FlagType](../models/flagtype.md) | :heavy_check_mark:                       | N/A                                      |
| `variantId`                              | *string*                                 | :heavy_check_mark:                       | N/A                                      |