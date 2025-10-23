# GetDrainsDrainsSampling

## Example Usage

```typescript
import { GetDrainsDrainsSampling } from "@vercel/sdk/models/getdrainsop.js";

let value: GetDrainsDrainsSampling = {
  type: "head_sampling",
  rate: 2275.47,
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `type`                                                         | [models.GetDrainsDrainsType](../models/getdrainsdrainstype.md) | :heavy_check_mark:                                             | N/A                                                            |
| `rate`                                                         | *number*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `env`                                                          | [models.GetDrainsDrainsEnv](../models/getdrainsdrainsenv.md)   | :heavy_minus_sign:                                             | N/A                                                            |
| `requestPath`                                                  | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |