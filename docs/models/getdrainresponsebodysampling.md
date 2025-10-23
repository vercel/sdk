# GetDrainResponseBodySampling

## Example Usage

```typescript
import { GetDrainResponseBodySampling } from "@vercel/sdk/models/getdrainop.js";

let value: GetDrainResponseBodySampling = {
  type: "head_sampling",
  rate: 5823.78,
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `type`                                                                   | [models.GetDrainResponseBodyType](../models/getdrainresponsebodytype.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `rate`                                                                   | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `env`                                                                    | [models.GetDrainResponseBodyEnv](../models/getdrainresponsebodyenv.md)   | :heavy_minus_sign:                                                       | N/A                                                                      |
| `requestPath`                                                            | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |