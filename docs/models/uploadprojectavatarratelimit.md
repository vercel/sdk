# UploadProjectAvatarRateLimit

## Example Usage

```typescript
import { UploadProjectAvatarRateLimit } from "@vercel/sdk/models/uploadprojectavatartracing.js";

let value: UploadProjectAvatarRateLimit = {
  algo: "fixed_window",
  window: 7097.08,
  limit: 978.39,
  keys: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `algo`                                                                 | [models.UploadProjectAvatarAlgo](../models/uploadprojectavataralgo.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `window`                                                               | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `limit`                                                                | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `keys`                                                                 | *string*[]                                                             | :heavy_check_mark:                                                     | N/A                                                                    |