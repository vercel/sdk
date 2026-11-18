# FiftyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { FiftyFour } from "@vercel/sdk/models/payloadaction.js";

let value: FiftyFour = {
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