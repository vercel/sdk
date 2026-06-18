# GetMicrofrontendsInGroupToMicrofrontends2

The target envs on the current project that may be accessed.

## Example Usage

```typescript
import { GetMicrofrontendsInGroupToMicrofrontends2 } from "@vercel/sdk/models/getmicrofrontendsingrouptomicrofrontends2.js";

let value: GetMicrofrontendsInGroupToMicrofrontends2 = {
  preset: "all-custom",
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `slugs`                                                                                                                              | *string*[]                                                                                                                           | :heavy_minus_sign:                                                                                                                   | System environment slugs (`production`, `preview`) and/or custom environment slugs defined on the referenced project.                |
| `preset`                                                                                                                             | [models.GetMicrofrontendsInGroupToMicrofrontendsResponsePreset](../models/getmicrofrontendsingrouptomicrofrontendsresponsepreset.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |