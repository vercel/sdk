# ResponseBodyCustomAllow

Optional overrides for the default same-env-by-slug matching. Provide explicit rules to allow cross-env access or presets. An empty array denies all access and is only allowed for the current project.

## Example Usage

```typescript
import { ResponseBodyCustomAllow } from "@vercel/sdk/models/getprojectsresponsebody.js";

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