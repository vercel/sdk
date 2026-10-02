# GetMicrofrontendsInGroupCustomAllow

Optional overrides for the default same-env-by-slug matching. Provide explicit rules to allow cross-env access or presets. An empty array denies all access and is only allowed for the current project.

## Example Usage

```typescript
import { GetMicrofrontendsInGroupCustomAllow } from "@vercel/sdk/models/getmicrofrontendsingroupresponsebody.js";

let value: GetMicrofrontendsInGroupCustomAllow = {
  from: {
    slugs: [
      "<value 1>",
      "<value 2>",
    ],
  },
  to: {
    slugs: [],
  },
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `from`                                            | *models.GetMicrofrontendsInGroupFrom*             | :heavy_check_mark:                                | N/A                                               |
| `to`                                              | *models.GetMicrofrontendsInGroupMicrofrontendsTo* | :heavy_check_mark:                                | N/A                                               |