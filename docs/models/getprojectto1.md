# GetProjectTo1

The target envs on the current project that may be accessed.

## Example Usage

```typescript
import { GetProjectTo1 } from "@vercel/sdk/models/getprojectdestination.js";

let value: GetProjectTo1 = {
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
| `preset`                                                                                                              | [models.GetProjectToPreset](../models/getprojecttopreset.md)                                                          | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |