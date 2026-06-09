# GetMicrofrontendsInGroupFrom1

The source envs on the trusted project that are allowed to access `to`.

## Example Usage

```typescript
import { GetMicrofrontendsInGroupFrom1 } from "@vercel/sdk/models/getmicrofrontendsingrouptomicrofrontends1.js";

let value: GetMicrofrontendsInGroupFrom1 = {
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
| `preset`                                                                                                              | [models.GetMicrofrontendsInGroupFromPreset](../models/getmicrofrontendsingroupfrompreset.md)                          | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |