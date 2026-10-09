# DeleteProjectAvatarToProjects2

The target envs on the current project that may be accessed.

## Example Usage

```typescript
import { DeleteProjectAvatarToProjects2 } from "@vercel/sdk/models/deleteprojectavatarresponsebody.js";

let value: DeleteProjectAvatarToProjects2 = {
  preset: "all-custom",
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `preset`                                                                                                              | [models.DeleteProjectAvatarToProjectsResponse200Preset](../models/deleteprojectavatartoprojectsresponse200preset.md)  | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `slugs`                                                                                                               | *string*[]                                                                                                            | :heavy_minus_sign:                                                                                                    | System environment slugs (`production`, `preview`) and/or custom environment slugs defined on the referenced project. |