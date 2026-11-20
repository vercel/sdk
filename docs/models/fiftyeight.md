# FiftyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { FiftyEight } from "@vercel/sdk/models/twenty.js";

let value: FiftyEight = {
  virtualModelConfig: {
    id: "<id>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `changedFields`                                                            | [models.PayloadChangedFields](../models/payloadchangedfields.md)[]         | :heavy_minus_sign:                                                         | N/A                                                                        |
| `virtualModelConfig`                                                       | [models.PayloadVirtualModelConfig](../models/payloadvirtualmodelconfig.md) | :heavy_check_mark:                                                         | N/A                                                                        |