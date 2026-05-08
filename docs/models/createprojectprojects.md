# CreateProjectProjects

## Example Usage

```typescript
import { CreateProjectProjects } from "@vercel/sdk/models/createprojectto.js";

let value: CreateProjectProjects = {};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `label`                                                                                                                    | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `customAllow`                                                                                                              | [models.CreateProjectCustomAllow](../models/createprojectcustomallow.md)[]                                                 | :heavy_minus_sign:                                                                                                         | Optional overrides for the default same-env-by-slug matching. Provide explicit rules to allow cross-env access or presets. |