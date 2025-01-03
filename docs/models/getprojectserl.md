# GetProjectsErl

## Example Usage

```typescript
import { GetProjectsErl } from "@vercel/sdk/models/getprojectsop.js";

let value: GetProjectsErl = {
  algo: "token_bucket",
  window: 2716.53,
  limit: 4554.44,
  keys: [
    "<value>",
  ],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `algo`                                                 | [models.GetProjectsAlgo](../models/getprojectsalgo.md) | :heavy_check_mark:                                     | N/A                                                    |
| `window`                                               | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `limit`                                                | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `keys`                                                 | *string*[]                                             | :heavy_check_mark:                                     | N/A                                                    |