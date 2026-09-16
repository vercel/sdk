# UpdateProjectCustomAllow

Optional overrides for the default same-env-by-slug matching. Provide explicit rules to allow cross-env access or presets.

## Example Usage

```typescript
import { UpdateProjectCustomAllow } from "@vercel/sdk/models/updateprojectresponsebody.js";

let value: UpdateProjectCustomAllow = {
  from: {
    preset: "all-custom",
  },
  to: {
    preset: "all-custom",
  },
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `from`                                   | *models.UpdateProjectFrom*               | :heavy_check_mark:                       | N/A                                      |
| `to`                                     | *models.UpdateProjectProjectsResponseTo* | :heavy_check_mark:                       | N/A                                      |