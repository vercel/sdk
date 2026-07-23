# TwentyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { TwentyThree } from "@vercel/sdk/models/nineteen.js";

let value: TwentyThree = {
  rule: {
    id: "<id>",
    type: "<value>",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `rule`                                                           | [models.UserEventPayloadRule](../models/usereventpayloadrule.md) | :heavy_check_mark:                                               | N/A                                                              |
| `enabled`                                                        | *boolean*                                                        | :heavy_minus_sign:                                               | N/A                                                              |