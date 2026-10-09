# DeleteProjectAvatarTo1

The target envs on the current project that may be accessed.

## Example Usage

```typescript
import { DeleteProjectAvatarTo1 } from "@vercel/sdk/models/deleteprojectavatarresponsebody.js";

let value: DeleteProjectAvatarTo1 = {
  slugs: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `preset`                                                                                                              | [models.DeleteProjectAvatarToPreset](../models/deleteprojectavatartopreset.md)                                        | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |
| `slugs`                                                                                                               | *string*[]                                                                                                            | :heavy_check_mark:                                                                                                    | System environment slugs (`production`, `preview`) and/or custom environment slugs defined on the referenced project. |