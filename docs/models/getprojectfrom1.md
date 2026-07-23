# GetProjectFrom1

The source envs on the trusted project that are allowed to access `to`.

## Example Usage

```typescript
import { GetProjectFrom1 } from "@vercel/sdk/models/getprojectdestination.js";

let value: GetProjectFrom1 = {
  slugs: [
    "<value 1>",
  ],
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `slugs`                                                                                                               | *string*[]                                                                                                            | :heavy_check_mark:                                                                                                    | System environment slugs (`production`, `preview`) and/or custom environment slugs defined on the referenced project. |
| `preset`                                                                                                              | [models.GetProjectFromPreset](../models/getprojectfrompreset.md)                                                      | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |