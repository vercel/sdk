# DeleteProjectAvatarRateLimit

## Example Usage

```typescript
import { DeleteProjectAvatarRateLimit } from "@vercel/sdk/models/deleteprojectavatarresponsebody.js";

let value: DeleteProjectAvatarRateLimit = {
  algo: "fixed_window",
  keys: [
    "<value 1>",
  ],
  limit: 5325.91,
  window: 6939.94,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `algo`                                                                 | [models.DeleteProjectAvatarAlgo](../models/deleteprojectavataralgo.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `keys`                                                                 | *string*[]                                                             | :heavy_check_mark:                                                     | N/A                                                                    |
| `limit`                                                                | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `window`                                                               | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |