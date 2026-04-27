# UpdateMicrofrontendsProjects

## Example Usage

```typescript
import { UpdateMicrofrontendsProjects } from "@vercel/sdk/models/updatemicrofrontendssecurity.js";

let value: UpdateMicrofrontendsProjects = {};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `label`                                                                                                                    | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `customAllow`                                                                                                              | [models.UpdateMicrofrontendsCustomAllow](../models/updatemicrofrontendscustomallow.md)[]                                   | :heavy_minus_sign:                                                                                                         | Optional overrides for the default same-env-by-slug matching. Provide explicit rules to allow cross-env access or presets. |