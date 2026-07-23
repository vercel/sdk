# GetProjectCustomAllow

Optional overrides for the default same-env-by-slug matching. Provide explicit rules to allow cross-env access or presets.

## Example Usage

```typescript
import { GetProjectCustomAllow } from "@vercel/sdk/models/getprojectdestination.js";

let value: GetProjectCustomAllow = {
  from: {
    preset: "all-custom",
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

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `from`                        | *models.GetProjectFrom*       | :heavy_check_mark:            | N/A                           |
| `to`                          | *models.GetProjectProjectsTo* | :heavy_check_mark:            | N/A                           |