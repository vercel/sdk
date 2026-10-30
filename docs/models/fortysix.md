# FortySix

The payload of the event, if requested.

## Example Usage

```typescript
import { FortySix } from "@vercel/sdk/models/usereventpayload26apikey.js";

let value: FortySix = {
  rule: {
    id: "<id>",
    type: "<value>",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `enabled`                                                        | *boolean*                                                        | :heavy_minus_sign:                                               | N/A                                                              |
| `rule`                                                           | [models.UserEventPayloadRule](../models/usereventpayloadrule.md) | :heavy_check_mark:                                               | N/A                                                              |