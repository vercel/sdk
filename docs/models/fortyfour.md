# FortyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { FortyFour } from "@vercel/sdk/models/usereventpayload26apikey.js";

let value: FortyFour = {
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