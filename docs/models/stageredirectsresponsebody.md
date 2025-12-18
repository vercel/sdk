# StageRedirectsResponseBody

## Example Usage

```typescript
import { StageRedirectsResponseBody } from "@vercel/sdk/models/stageredirectsop.js";

let value: StageRedirectsResponseBody = {
  alias: "<value>",
  version: {
    id: "<id>",
    key: "<key>",
    lastModified: 4066.68,
    createdBy: "<value>",
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `alias`                                                            | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `version`                                                          | [models.StageRedirectsVersion](../models/stageredirectsversion.md) | :heavy_check_mark:                                                 | N/A                                                                |