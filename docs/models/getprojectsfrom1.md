# GetProjectsFrom1

The source envs on the trusted project that are allowed to access `to`.

## Example Usage

```typescript
import { GetProjectsFrom1 } from "@vercel/sdk/models/getprojectsresponsebody.js";

let value: GetProjectsFrom1 = {
  slugs: [
    "<value 1>",
  ],
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `slugs`                                                                                                               | *string*[]                                                                                                            | :heavy_check_mark:                                                                                                    | System environment slugs (`production`, `preview`) and/or custom environment slugs defined on the referenced project. |
| `preset`                                                                                                              | [models.GetProjectsFromPreset](../models/getprojectsfrompreset.md)                                                    | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |