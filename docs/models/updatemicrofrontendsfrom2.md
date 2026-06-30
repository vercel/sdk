# UpdateMicrofrontendsFrom2

The source envs on the trusted project that are allowed to access `to`.

## Example Usage

```typescript
import { UpdateMicrofrontendsFrom2 } from "@vercel/sdk/models/updatemicrofrontendsresponsebody.js";

let value: UpdateMicrofrontendsFrom2 = {
  preset: "all-custom",
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `slugs`                                                                                                               | *string*[]                                                                                                            | :heavy_minus_sign:                                                                                                    | System environment slugs (`production`, `preview`) and/or custom environment slugs defined on the referenced project. |
| `preset`                                                                                                              | [models.UpdateMicrofrontendsFromProjectsPreset](../models/updatemicrofrontendsfromprojectspreset.md)                  | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |