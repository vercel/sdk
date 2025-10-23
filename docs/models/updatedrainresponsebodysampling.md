# UpdateDrainResponseBodySampling

## Example Usage

```typescript
import { UpdateDrainResponseBodySampling } from "@vercel/sdk/models/updatedrainop.js";

let value: UpdateDrainResponseBodySampling = {
  type: "head_sampling",
  rate: 9851.33,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `type`                                                                         | [models.UpdateDrainResponseBodyType](../models/updatedrainresponsebodytype.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `rate`                                                                         | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `env`                                                                          | [models.UpdateDrainResponseBodyEnv](../models/updatedrainresponsebodyenv.md)   | :heavy_minus_sign:                                                             | N/A                                                                            |
| `requestPath`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |