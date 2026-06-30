# GetProjectsToProjectsResponse1

The target envs on the current project that may be accessed.

## Example Usage

```typescript
import { GetProjectsToProjectsResponse1 } from "@vercel/sdk/models/getprojectsresponsebodyprojectsresponse200applicationjson2action.js";

let value: GetProjectsToProjectsResponse1 = {
  slugs: [],
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `slugs`                                                                                                                            | *string*[]                                                                                                                         | :heavy_check_mark:                                                                                                                 | System environment slugs (`production`, `preview`) and/or custom environment slugs defined on the referenced project.              |
| `preset`                                                                                                                           | [models.GetProjectsToProjectsResponse200ApplicationJSONPreset](../models/getprojectstoprojectsresponse200applicationjsonpreset.md) | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |