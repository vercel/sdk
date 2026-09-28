# ThirtyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { ThirtyEight } from "@vercel/sdk/models/userevent.js";

let value: ThirtyEight = {
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