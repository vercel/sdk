# DeleteProjectAvatarCustomAllow

Optional overrides for the default same-env-by-slug matching. Provide explicit rules to allow cross-env access or presets. An empty array denies all access and is only allowed for the current project.

## Example Usage

```typescript
import { DeleteProjectAvatarCustomAllow } from "@vercel/sdk/models/deleteprojectavatarresponsebody.js";

let value: DeleteProjectAvatarCustomAllow = {
  from: {
    slugs: [],
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
| `from`                                 | *models.DeleteProjectAvatarFrom*       | :heavy_check_mark:                     | N/A                                    |
| `to`                                   | *models.DeleteProjectAvatarProjectsTo* | :heavy_check_mark:                     | N/A                                    |