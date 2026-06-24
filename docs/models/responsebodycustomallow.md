# ResponseBodyCustomAllow

Optional overrides for the default same-env-by-slug matching. Provide explicit rules to allow cross-env access or presets.

## Example Usage

```typescript
import { ResponseBodyCustomAllow } from "@vercel/sdk/models/getprojectshas1.js";

let value: ResponseBodyCustomAllow = {
  from: {
    slugs: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  to: {
    slugs: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `from`                             | *models.ResponseBodyFrom*          | :heavy_check_mark:                 | N/A                                |
| `to`                               | *models.GetProjectsResponseBodyTo* | :heavy_check_mark:                 | N/A                                |