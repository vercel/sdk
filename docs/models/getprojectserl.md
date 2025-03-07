# GetProjectsErl

## Example Usage

```typescript
import { GetProjectsErl } from "@vercel/sdk/models/getprojectsop.js";

let value: GetProjectsErl = {
  algo: "fixed_window",
  window: 7400.98,
  limit: 6805.15,
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