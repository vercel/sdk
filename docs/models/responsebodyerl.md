# ResponseBodyErl

## Example Usage

```typescript
import { ResponseBodyErl } from "@vercel/sdk/models/getprojectsop.js";

let value: ResponseBodyErl = {
  algo: "token_bucket",
  window: 6874.54,
  limit: 710.59,
  keys: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `algo`                                                                         | [models.GetProjectsResponseBodyAlgo](../models/getprojectsresponsebodyalgo.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `window`                                                                       | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `limit`                                                                        | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `keys`                                                                         | *string*[]                                                                     | :heavy_check_mark:                                                             | N/A                                                                            |