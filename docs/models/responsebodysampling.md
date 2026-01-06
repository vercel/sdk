# ResponseBodySampling

## Example Usage

```typescript
import { ResponseBodySampling } from "@vercel/sdk/models/createdrainop.js";

let value: ResponseBodySampling = {
  type: "head_sampling",
  rate: 5293.76,
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `type`                                                                                   | [models.CreateDrainResponseBodyType](../models/createdrainresponsebodytype.md)           | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `rate`                                                                                   | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `env`                                                                                    | [models.CreateDrainResponseBodyDrainsEnv](../models/createdrainresponsebodydrainsenv.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `requestPath`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |