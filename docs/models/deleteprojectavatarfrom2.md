# DeleteProjectAvatarFrom2

The source envs on the trusted project that are allowed to access `to`.

## Example Usage

```typescript
import { DeleteProjectAvatarFrom2 } from "@vercel/sdk/models/deleteprojectavatarresponsebody.js";

let value: DeleteProjectAvatarFrom2 = {
  preset: "all-custom",
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `preset`                                                                                                              | [models.DeleteProjectAvatarFromProjectsPreset](../models/deleteprojectavatarfromprojectspreset.md)                    | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `slugs`                                                                                                               | *string*[]                                                                                                            | :heavy_minus_sign:                                                                                                    | System environment slugs (`production`, `preview`) and/or custom environment slugs defined on the referenced project. |