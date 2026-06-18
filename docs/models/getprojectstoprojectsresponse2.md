# GetProjectsToProjectsResponse2

The target envs on the current project that may be accessed.

## Example Usage

```typescript
import { GetProjectsToProjectsResponse2 } from "@vercel/sdk/models/getprojectscontenthint10.js";

let value: GetProjectsToProjectsResponse2 = {
  preset: "all-custom",
};
```

## Fields

| Field                                                                                                                                                      | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `slugs`                                                                                                                                                    | *string*[]                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                         | System environment slugs (`production`, `preview`) and/or custom environment slugs defined on the referenced project.                                      |
| `preset`                                                                                                                                                   | [models.GetProjectsToProjectsResponse200ApplicationJSONResponseBodyPreset](../models/getprojectstoprojectsresponse200applicationjsonresponsebodypreset.md) | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |