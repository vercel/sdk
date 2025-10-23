# DrainsSampling

## Example Usage

```typescript
import { DrainsSampling } from "@vercel/sdk/models/getdrainsop.js";

let value: DrainsSampling = {
  type: "head_sampling",
  rate: 8962.45,
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `type`                                       | [models.DrainsType](../models/drainstype.md) | :heavy_check_mark:                           | N/A                                          |
| `rate`                                       | *number*                                     | :heavy_check_mark:                           | N/A                                          |
| `env`                                        | [models.DrainsEnv](../models/drainsenv.md)   | :heavy_minus_sign:                           | N/A                                          |
| `requestPath`                                | *string*                                     | :heavy_minus_sign:                           | N/A                                          |