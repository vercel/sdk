# GetProjectProjects

## Example Usage

```typescript
import { GetProjectProjects } from "@vercel/sdk/models/getprojectvalue3.js";

let value: GetProjectProjects = {};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `label`                                                                                                                    | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `customAllow`                                                                                                              | [models.GetProjectCustomAllow](../models/getprojectcustomallow.md)[]                                                       | :heavy_minus_sign:                                                                                                         | Optional overrides for the default same-env-by-slug matching. Provide explicit rules to allow cross-env access or presets. |