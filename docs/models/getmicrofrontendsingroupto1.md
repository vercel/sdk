# GetMicrofrontendsInGroupTo1

The target envs on the current project that may be accessed.

## Example Usage

```typescript
import { GetMicrofrontendsInGroupTo1 } from "@vercel/sdk/models/getmicrofrontendsingroupto1.js";

let value: GetMicrofrontendsInGroupTo1 = {
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
| `preset`                                                                                                              | [models.GetMicrofrontendsInGroupToPreset](../models/getmicrofrontendsingrouptopreset.md)                              | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |