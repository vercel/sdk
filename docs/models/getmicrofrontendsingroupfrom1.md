# GetMicrofrontendsInGroupFrom1

The source envs on the trusted project that are allowed to access `to`.

## Example Usage

```typescript
import { GetMicrofrontendsInGroupFrom1 } from "@vercel/sdk/models/getmicrofrontendsingroupfrom1.js";

let value: GetMicrofrontendsInGroupFrom1 = {
  slugs: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `preset`                                                                                                                 | [models.GetMicrofrontendsInGroupFromMicrofrontendsPreset](../models/getmicrofrontendsingroupfrommicrofrontendspreset.md) | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `slugs`                                                                                                                  | *string*[]                                                                                                               | :heavy_check_mark:                                                                                                       | System environment slugs (`production`, `preview`) and/or custom environment slugs defined on the referenced project.    |