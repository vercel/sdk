# FiftyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { FiftyNine } from "@vercel/sdk/models/twentythree.js";

let value: FiftyNine = {
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