# ResponseBody3

## Example Usage

```typescript
import { ResponseBody3 } from "@vercel/sdk/models/statusop.js";

let value: ResponseBody3 = {
  status: "paused",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `readOnly`                                                                   | *boolean*                                                                    | :heavy_minus_sign:                                                           | Present and `true` when the token can read artifacts but cannot upload them. |
| `status`                                                                     | [models.ResponseBodyStatus](../models/responsebodystatus.md)                 | :heavy_check_mark:                                                           | N/A                                                                          |