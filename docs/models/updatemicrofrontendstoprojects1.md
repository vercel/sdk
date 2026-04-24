# UpdateMicrofrontendsToProjects1

The target envs on the current project that may be accessed.

## Example Usage

```typescript
import { UpdateMicrofrontendsToProjects1 } from "@vercel/sdk/models/updatemicrofrontendssecurity.js";

let value: UpdateMicrofrontendsToProjects1 = {
  slugs: [
    "<value 1>",
  ],
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `slugs`                                                                                                               | *string*[]                                                                                                            | :heavy_check_mark:                                                                                                    | System environment slugs (`production`, `preview`) and/or custom environment slugs defined on the referenced project. |
| `preset`                                                                                                              | [models.UpdateMicrofrontendsToProjectsResponsePreset](../models/updatemicrofrontendstoprojectsresponsepreset.md)      | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |