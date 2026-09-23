# GetMicrofrontendsInGroupTo2

The target envs on the current project that may be accessed.

## Example Usage

```typescript
import { GetMicrofrontendsInGroupTo2 } from "@vercel/sdk/models/getmicrofrontendsingroupto.js";

let value: GetMicrofrontendsInGroupTo2 = {
  preset: "all-custom",
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `preset`                                                                                                              | [models.GetMicrofrontendsInGroupToMicrofrontendsPreset](../models/getmicrofrontendsingrouptomicrofrontendspreset.md)  | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `slugs`                                                                                                               | *string*[]                                                                                                            | :heavy_minus_sign:                                                                                                    | System environment slugs (`production`, `preview`) and/or custom environment slugs defined on the referenced project. |