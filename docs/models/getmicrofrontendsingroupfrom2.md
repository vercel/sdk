# GetMicrofrontendsInGroupFrom2

The source envs on the trusted project that are allowed to access `to`.

## Example Usage

```typescript
import { GetMicrofrontendsInGroupFrom2 } from "@vercel/sdk/models/getmicrofrontendsingroupfrommicrofrontendspreset.js";

let value: GetMicrofrontendsInGroupFrom2 = {
  preset: "all-custom",
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `preset`                                                                                                              | [models.GetMicrofrontendsInGroupFromPreset](../models/getmicrofrontendsingroupfrompreset.md)                          | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `slugs`                                                                                                               | *string*[]                                                                                                            | :heavy_minus_sign:                                                                                                    | System environment slugs (`production`, `preview`) and/or custom environment slugs defined on the referenced project. |