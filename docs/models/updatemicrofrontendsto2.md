# UpdateMicrofrontendsTo2

The target envs on the current project that may be accessed.

## Example Usage

```typescript
import { UpdateMicrofrontendsTo2 } from "@vercel/sdk/models/updatemicrofrontendsfrompreset.js";

let value: UpdateMicrofrontendsTo2 = {
  preset: "all-custom",
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `preset`                                                                                                              | [models.UpdateMicrofrontendsToProjectsPreset](../models/updatemicrofrontendstoprojectspreset.md)                      | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `slugs`                                                                                                               | *string*[]                                                                                                            | :heavy_minus_sign:                                                                                                    | System environment slugs (`production`, `preview`) and/or custom environment slugs defined on the referenced project. |