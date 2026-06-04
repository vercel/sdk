# CreateProjectCustomAllow

Optional overrides for the default same-env-by-slug matching. Provide explicit rules to allow cross-env access or presets.

## Example Usage

```typescript
import { CreateProjectCustomAllow } from "@vercel/sdk/models/createprojectto2.js";

let value: CreateProjectCustomAllow = {
  from: {
    preset: "all-custom",
  },
  to: {
    slugs: [],
  },
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `from`                           | *models.CreateProjectFrom*       | :heavy_check_mark:               | N/A                              |
| `to`                             | *models.CreateProjectProjectsTo* | :heavy_check_mark:               | N/A                              |