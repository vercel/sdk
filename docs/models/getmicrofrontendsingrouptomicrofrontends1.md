# GetMicrofrontendsInGroupToMicrofrontends1

The target envs on the current project that may be accessed.

## Example Usage

```typescript
import { GetMicrofrontendsInGroupToMicrofrontends1 } from "@vercel/sdk/models/getmicrofrontendsingroupto1.js";

let value: GetMicrofrontendsInGroupToMicrofrontends1 = {
  slugs: [],
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `slugs`                                                                                                                                    | *string*[]                                                                                                                                 | :heavy_check_mark:                                                                                                                         | System environment slugs (`production`, `preview`) and/or custom environment slugs defined on the referenced project.                      |
| `preset`                                                                                                                                   | [models.GetMicrofrontendsInGroupToMicrofrontendsResponse200Preset](../models/getmicrofrontendsingrouptomicrofrontendsresponse200preset.md) | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |