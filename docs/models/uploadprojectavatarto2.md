# UploadProjectAvatarTo2

The target envs on the current project that may be accessed.

## Example Usage

```typescript
import { UploadProjectAvatarTo2 } from "@vercel/sdk/models/uploadprojectavatarmanagedrules.js";

let value: UploadProjectAvatarTo2 = {
  preset: "all-custom",
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `slugs`                                                                                                               | *string*[]                                                                                                            | :heavy_minus_sign:                                                                                                    | System environment slugs (`production`, `preview`) and/or custom environment slugs defined on the referenced project. |
| `preset`                                                                                                              | [models.UploadProjectAvatarToProjectsPreset](../models/uploadprojectavatartoprojectspreset.md)                        | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |