# CreateProjectToProjects1

The target envs on the current project that may be accessed.

## Example Usage

```typescript
import { CreateProjectToProjects1 } from "@vercel/sdk/models/createprojectto2.js";

let value: CreateProjectToProjects1 = {
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
| `preset`                                                                                                              | [models.CreateProjectToProjectsResponsePreset](../models/createprojecttoprojectsresponsepreset.md)                    | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |