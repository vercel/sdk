# GetProjectsFromProjectsResponse2

The source envs on the trusted project that are allowed to access `to`.

## Example Usage

```typescript
import { GetProjectsFromProjectsResponse2 } from "@vercel/sdk/models/getprojectsresponsebodyprojectsresponse200applicationjson2projectstype.js";

let value: GetProjectsFromProjectsResponse2 = {
  preset: "all-custom",
};
```

## Fields

| Field                                                                                                                                                          | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `preset`                                                                                                                                                       | [models.GetProjectsFromProjectsResponse200ApplicationJSONResponseBodyPreset](../models/getprojectsfromprojectsresponse200applicationjsonresponsebodypreset.md) | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `slugs`                                                                                                                                                        | *string*[]                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                             | System environment slugs (`production`, `preview`) and/or custom environment slugs defined on the referenced project.                                          |