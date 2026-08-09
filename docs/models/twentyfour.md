# TwentyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { TwentyFour } from "@vercel/sdk/models/userevent.js";

let value: TwentyFour = {
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