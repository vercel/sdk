# DrainsSampling

## Example Usage

```typescript
import { DrainsSampling } from "@vercel/sdk/models/getdrainsop.js";

let value: DrainsSampling = {
  rate: 8962.45,
  type: "head_sampling",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `env`                                        | [models.DrainsEnv](../models/drainsenv.md)   | :heavy_minus_sign:                           | N/A                                          |
| `rate`                                       | *number*                                     | :heavy_check_mark:                           | N/A                                          |
| `requestPath`                                | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `type`                                       | [models.DrainsType](../models/drainstype.md) | :heavy_check_mark:                           | N/A                                          |