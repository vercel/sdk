# UpdateMicrofrontendsRateLimit

## Example Usage

```typescript
import { UpdateMicrofrontendsRateLimit } from "@vercel/sdk/models/updatemicrofrontendssamplingrules.js";

let value: UpdateMicrofrontendsRateLimit = {
  algo: "fixed_window",
  window: 7075.46,
  limit: 6116.08,
  keys: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `algo`                                                                   | [models.UpdateMicrofrontendsAlgo](../models/updatemicrofrontendsalgo.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `window`                                                                 | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `limit`                                                                  | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `keys`                                                                   | *string*[]                                                               | :heavy_check_mark:                                                       | N/A                                                                      |