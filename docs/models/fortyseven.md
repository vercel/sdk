# FortySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { FortySeven } from "@vercel/sdk/models/thirtytwo.js";

let value: FortySeven = {
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