# GetDrainSampling

## Example Usage

```typescript
import { GetDrainSampling } from "@vercel/sdk/models/getdrainop.js";

let value: GetDrainSampling = {
  rate: 2715.69,
  type: "head_sampling",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `env`                                            | [models.GetDrainEnv](../models/getdrainenv.md)   | :heavy_minus_sign:                               | N/A                                              |
| `rate`                                           | *number*                                         | :heavy_check_mark:                               | N/A                                              |
| `requestPath`                                    | *string*                                         | :heavy_minus_sign:                               | N/A                                              |
| `type`                                           | [models.GetDrainType](../models/getdraintype.md) | :heavy_check_mark:                               | N/A                                              |