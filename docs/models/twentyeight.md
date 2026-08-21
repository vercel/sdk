# TwentyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { TwentyEight } from "@vercel/sdk/models/payloadscopetype.js";

let value: TwentyEight = {
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