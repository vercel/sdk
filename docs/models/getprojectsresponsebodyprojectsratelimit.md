# GetProjectsResponseBodyProjectsRateLimit

## Example Usage

```typescript
import { GetProjectsResponseBodyProjectsRateLimit } from "@vercel/sdk/models/getprojectstoprojectsresponse2001.js";

let value: GetProjectsResponseBodyProjectsRateLimit = {
  algo: "token_bucket",
  keys: [
    "<value 1>",
    "<value 2>",
  ],
  limit: 4521.58,
  window: 615,
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `algo`                                                                                                         | [models.GetProjectsResponseBodyProjectsResponseAlgo](../models/getprojectsresponsebodyprojectsresponsealgo.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `keys`                                                                                                         | *string*[]                                                                                                     | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `limit`                                                                                                        | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `window`                                                                                                       | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |