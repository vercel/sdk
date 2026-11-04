# UpdateMicrofrontendsRateLimit

## Example Usage

```typescript
import { UpdateMicrofrontendsRateLimit } from "@vercel/sdk/models/updatemicrofrontendsfrom1.js";

let value: UpdateMicrofrontendsRateLimit = {
  algo: "fixed_window",
  keys: [
    "<value 1>",
    "<value 2>",
  ],
  limit: 6116.08,
  window: 9668.21,
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `algo`                                                                   | [models.UpdateMicrofrontendsAlgo](../models/updatemicrofrontendsalgo.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `keys`                                                                   | *string*[]                                                               | :heavy_check_mark:                                                       | N/A                                                                      |
| `limit`                                                                  | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `window`                                                                 | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |