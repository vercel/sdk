# TwentyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { TwentyFive } from "@vercel/sdk/models/payloadchange.js";

let value: TwentyFive = {
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