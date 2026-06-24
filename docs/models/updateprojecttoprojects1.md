# UpdateProjectToProjects1

The target envs on the current project that may be accessed.

## Example Usage

```typescript
import { UpdateProjectToProjects1 } from "@vercel/sdk/models/updateprojectinternalroutes.js";

let value: UpdateProjectToProjects1 = {
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
| `preset`                                                                                                              | [models.UpdateProjectToProjectsResponsePreset](../models/updateprojecttoprojectsresponsepreset.md)                    | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |