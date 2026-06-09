# CreateProjectFrom1

The source envs on the trusted project that are allowed to access `to`.

## Example Usage

```typescript
import { CreateProjectFrom1 } from "@vercel/sdk/models/createprojectprojectsto.js";

let value: CreateProjectFrom1 = {
  slugs: [],
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `slugs`                                                                                                               | *string*[]                                                                                                            | :heavy_check_mark:                                                                                                    | System environment slugs (`production`, `preview`) and/or custom environment slugs defined on the referenced project. |
| `preset`                                                                                                              | [models.CreateProjectFromProjectsPreset](../models/createprojectfromprojectspreset.md)                                | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |