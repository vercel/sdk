# CreateDrainResponseBodySampling

## Example Usage

```typescript
import { CreateDrainResponseBodySampling } from "@vercel/sdk/models/createdrainop.js";

let value: CreateDrainResponseBodySampling = {
  rate: 1240.81,
  type: "head_sampling",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `env`                                                                                      | [models.CreateDrainResponseBodyEnv](../models/createdrainresponsebodyenv.md)               | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `rate`                                                                                     | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `requestPath`                                                                              | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `type`                                                                                     | [models.CreateDrainResponseBodyDrainsType](../models/createdrainresponsebodydrainstype.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |