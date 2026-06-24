# UpdateProjectProjectsProjects

## Example Usage

```typescript
import { UpdateProjectProjectsProjects } from "@vercel/sdk/models/updateprojectinternalroutes.js";

let value: UpdateProjectProjectsProjects = {};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `label`                                                                                                                    | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `customAllow`                                                                                                              | [models.UpdateProjectCustomAllow](../models/updateprojectcustomallow.md)[]                                                 | :heavy_minus_sign:                                                                                                         | Optional overrides for the default same-env-by-slug matching. Provide explicit rules to allow cross-env access or presets. |