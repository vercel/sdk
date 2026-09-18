# ThirtyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { ThirtyFive } from "@vercel/sdk/models/thirtythree.js";

let value: ThirtyFive = {
  virtualModelConfig: {
    id: "<id>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `changedFields`                                                            | [models.ChangedFields](../models/changedfields.md)[]                       | :heavy_minus_sign:                                                         | N/A                                                                        |
| `virtualModelConfig`                                                       | [models.PayloadVirtualModelConfig](../models/payloadvirtualmodelconfig.md) | :heavy_check_mark:                                                         | N/A                                                                        |