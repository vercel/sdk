# GetProjectsTo1

The target envs on the current project that may be accessed.

## Example Usage

```typescript
import { GetProjectsTo1 } from "@vercel/sdk/models/getprojectsblockhistoryprojectsroute.js";

let value: GetProjectsTo1 = {
  slugs: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `slugs`                                                                                                               | *string*[]                                                                                                            | :heavy_check_mark:                                                                                                    | System environment slugs (`production`, `preview`) and/or custom environment slugs defined on the referenced project. |
| `preset`                                                                                                              | [models.GetProjectsToPreset](../models/getprojectstopreset.md)                                                        | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |