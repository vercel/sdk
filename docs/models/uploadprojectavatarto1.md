# UploadProjectAvatarTo1

The target envs on the current project that may be accessed.

## Example Usage

```typescript
import { UploadProjectAvatarTo1 } from "@vercel/sdk/models/uploadprojectavatarresponsebody.js";

let value: UploadProjectAvatarTo1 = {
  slugs: [],
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `slugs`                                                                                                               | *string*[]                                                                                                            | :heavy_check_mark:                                                                                                    | System environment slugs (`production`, `preview`) and/or custom environment slugs defined on the referenced project. |
| `preset`                                                                                                              | [models.UploadProjectAvatarToPreset](../models/uploadprojectavatartopreset.md)                                        | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |