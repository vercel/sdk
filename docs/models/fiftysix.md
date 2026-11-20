# FiftySix

The payload of the event, if requested.

## Example Usage

```typescript
import { FiftySix } from "@vercel/sdk/models/twenty.js";

let value: FiftySix = {
  rule: {
    id: "<id>",
    type: "<value>",
  },
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `changedFields`                                      | [models.ChangedFields](../models/changedfields.md)[] | :heavy_minus_sign:                                   | N/A                                                  |
| `enabled`                                            | *boolean*                                            | :heavy_minus_sign:                                   | N/A                                                  |
| `previousRewriteModel`                               | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `rule`                                               | [models.PayloadRule](../models/payloadrule.md)       | :heavy_check_mark:                                   | N/A                                                  |