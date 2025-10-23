# UpdateDrainSampling

## Example Usage

```typescript
import { UpdateDrainSampling } from "@vercel/sdk/models/updatedrainop.js";

let value: UpdateDrainSampling = {
  type: "<value>",
  rate: 5155.52,
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `type`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `rate`                                               | *number*                                             | :heavy_check_mark:                                   | Sampling rate from 0 to 1 (e.g., 0.1 for 10%)        |
| `env`                                                | [models.UpdateDrainEnv](../models/updatedrainenv.md) | :heavy_minus_sign:                                   | Environment to apply sampling to                     |
| `requestPath`                                        | *string*                                             | :heavy_minus_sign:                                   | Request path prefix to apply the sampling rule to    |