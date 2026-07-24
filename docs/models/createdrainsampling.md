# CreateDrainSampling

## Example Usage

```typescript
import { CreateDrainSampling } from "@vercel/sdk/models/createdrainop.js";

let value: CreateDrainSampling = {
  type: "<value>",
  rate: 4102.61,
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `type`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `rate`                                               | *number*                                             | :heavy_check_mark:                                   | Sampling rate from 0 to 1 (e.g., 0.1 for 10%)        |
| `env`                                                | [models.CreateDrainEnv](../models/createdrainenv.md) | :heavy_minus_sign:                                   | Environment to apply sampling to                     |
| `requestPath`                                        | *string*                                             | :heavy_minus_sign:                                   | Request path prefix to apply the sampling rule to    |