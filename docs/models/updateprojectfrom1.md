# UpdateProjectFrom1

The source envs on the trusted project that are allowed to access `to`.

## Example Usage

```typescript
import { UpdateProjectFrom1 } from "@vercel/sdk/models/updateprojectresponsebody.js";

let value: UpdateProjectFrom1 = {
  slugs: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `slugs`                                                                                                               | *string*[]                                                                                                            | :heavy_check_mark:                                                                                                    | System environment slugs (`production`, `preview`) and/or custom environment slugs defined on the referenced project. |
| `preset`                                                                                                              | [models.UpdateProjectFromProjectsPreset](../models/updateprojectfromprojectspreset.md)                                | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |