# UploadProjectAvatarToProjects1

The target envs on the current project that may be accessed.

## Example Usage

```typescript
import { UploadProjectAvatarToProjects1 } from "@vercel/sdk/models/uploadprojectavatarmanagedrules.js";

let value: UploadProjectAvatarToProjects1 = {
  slugs: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `slugs`                                                                                                               | *string*[]                                                                                                            | :heavy_check_mark:                                                                                                    | System environment slugs (`production`, `preview`) and/or custom environment slugs defined on the referenced project. |
| `preset`                                                                                                              | [models.UploadProjectAvatarToProjectsResponsePreset](../models/uploadprojectavatartoprojectsresponsepreset.md)        | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |