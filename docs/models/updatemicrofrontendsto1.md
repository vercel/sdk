# UpdateMicrofrontendsTo1

The target envs on the current project that may be accessed.

## Example Usage

```typescript
import { UpdateMicrofrontendsTo1 } from "@vercel/sdk/models/updatemicrofrontendsoidctokenconfig.js";

let value: UpdateMicrofrontendsTo1 = {
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
| `preset`                                                                                                              | [models.UpdateMicrofrontendsToPreset](../models/updatemicrofrontendstopreset.md)                                      | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |