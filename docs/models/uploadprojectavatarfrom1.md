# UploadProjectAvatarFrom1

The source envs on the trusted project that are allowed to access `to`.

## Example Usage

```typescript
import { UploadProjectAvatarFrom1 } from "@vercel/sdk/models/uploadprojectavatartoprojectsresponse200preset.js";

let value: UploadProjectAvatarFrom1 = {
  slugs: [
    "<value 1>",
  ],
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `preset`                                                                                                              | [models.UploadProjectAvatarFromPreset](../models/uploadprojectavatarfrompreset.md)                                    | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |
| `slugs`                                                                                                               | *string*[]                                                                                                            | :heavy_check_mark:                                                                                                    | System environment slugs (`production`, `preview`) and/or custom environment slugs defined on the referenced project. |