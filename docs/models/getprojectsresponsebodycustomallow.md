# GetProjectsResponseBodyCustomAllow

Optional overrides for the default same-env-by-slug matching. Provide explicit rules to allow cross-env access or presets.

## Example Usage

```typescript
import { GetProjectsResponseBodyCustomAllow } from "@vercel/sdk/models/getprojectscontenthint10.js";

let value: GetProjectsResponseBodyCustomAllow = {
  from: {
    slugs: [
      "<value 1>",
      "<value 2>",
    ],
  },
  to: {
    slugs: [
      "<value 1>",
    ],
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `from`                                                               | *models.GetProjectsResponseBodyFrom*                                 | :heavy_check_mark:                                                   | N/A                                                                  |
| `to`                                                                 | *models.GetProjectsResponseBodyProjectsResponse200ApplicationJSONTo* | :heavy_check_mark:                                                   | N/A                                                                  |