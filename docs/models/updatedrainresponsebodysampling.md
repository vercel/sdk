# UpdateDrainResponseBodySampling

## Example Usage

```typescript
import { UpdateDrainResponseBodySampling } from "@vercel/sdk/models/updatedrainop.js";

let value: UpdateDrainResponseBodySampling = {
  rate: 9851.33,
  type: "head_sampling",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `env`                                                                          | [models.UpdateDrainResponseBodyEnv](../models/updatedrainresponsebodyenv.md)   | :heavy_minus_sign:                                                             | N/A                                                                            |
| `rate`                                                                         | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `requestPath`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `type`                                                                         | [models.UpdateDrainResponseBodyType](../models/updatedrainresponsebodytype.md) | :heavy_check_mark:                                                             | N/A                                                                            |