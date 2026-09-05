# TwentyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { TwentyNine } from "@vercel/sdk/models/twentynine.js";

let value: TwentyNine = {
  rule: {
    id: "<id>",
    type: "<value>",
  },
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `rule`                           | [models.Rule](../models/rule.md) | :heavy_check_mark:               | N/A                              |