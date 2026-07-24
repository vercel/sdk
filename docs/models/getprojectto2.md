# GetProjectTo2

The target envs on the current project that may be accessed.

## Example Usage

```typescript
import { GetProjectTo2 } from "@vercel/sdk/models/getprojectdestination.js";

let value: GetProjectTo2 = {
  preset: "all-custom",
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `slugs`                                                                                                               | *string*[]                                                                                                            | :heavy_minus_sign:                                                                                                    | System environment slugs (`production`, `preview`) and/or custom environment slugs defined on the referenced project. |
| `preset`                                                                                                              | [models.GetProjectToProjectsPreset](../models/getprojecttoprojectspreset.md)                                          | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |