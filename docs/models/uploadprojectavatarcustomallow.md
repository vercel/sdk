# UploadProjectAvatarCustomAllow

Optional overrides for the default same-env-by-slug matching. Provide explicit rules to allow cross-env access or presets.

## Example Usage

```typescript
import { UploadProjectAvatarCustomAllow } from "@vercel/sdk/models/uploadprojectavatartracing.js";

let value: UploadProjectAvatarCustomAllow = {
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

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `from`                                 | *models.UploadProjectAvatarFrom*       | :heavy_check_mark:                     | N/A                                    |
| `to`                                   | *models.UploadProjectAvatarProjectsTo* | :heavy_check_mark:                     | N/A                                    |