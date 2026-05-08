# GetProjectsResponseBodyProjectsCustomAllow

Optional overrides for the default same-env-by-slug matching. Provide explicit rules to allow cross-env access or presets.

## Example Usage

```typescript
import { GetProjectsResponseBodyProjectsCustomAllow } from "@vercel/sdk/models/getprojectsresponsebodyprojectsowasp.js";

let value: GetProjectsResponseBodyProjectsCustomAllow = {
  from: {
    preset: "all-custom",
  },
  to: {
    slugs: [
      "<value 1>",
    ],
  },
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `from`                                                | *models.GetProjectsResponseBodyProjectsFrom*          | :heavy_check_mark:                                    | N/A                                                   |
| `to`                                                  | *models.GetProjectsResponseBodyProjectsResponse200To* | :heavy_check_mark:                                    | N/A                                                   |