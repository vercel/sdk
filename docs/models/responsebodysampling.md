# ResponseBodySampling

## Example Usage

```typescript
import { ResponseBodySampling } from "@vercel/sdk/models/createdrainop.js";

let value: ResponseBodySampling = {
  rate: 5293.76,
  type: "head_sampling",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `env`                                                                                    | [models.CreateDrainResponseBodyDrainsEnv](../models/createdrainresponsebodydrainsenv.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `rate`                                                                                   | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `requestPath`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `type`                                                                                   | [models.CreateDrainResponseBodyType](../models/createdrainresponsebodytype.md)           | :heavy_check_mark:                                                                       | N/A                                                                                      |