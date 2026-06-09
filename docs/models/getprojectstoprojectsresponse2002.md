# GetProjectsToProjectsResponse2002

The target envs on the current project that may be accessed.

## Example Usage

```typescript
import { GetProjectsToProjectsResponse2002 } from "@vercel/sdk/models/getprojectsresponsebodyprojectsresponse200applicationjson3projectssecuritymanagedrulesvercelrulesetaction.js";

let value: GetProjectsToProjectsResponse2002 = {
  preset: "all-custom",
};
```

## Fields

| Field                                                                                                                                                                        | Type                                                                                                                                                                         | Required                                                                                                                                                                     | Description                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `slugs`                                                                                                                                                                      | *string*[]                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                           | System environment slugs (`production`, `preview`) and/or custom environment slugs defined on the referenced project.                                                        |
| `preset`                                                                                                                                                                     | [models.GetProjectsToProjectsResponse200ApplicationJSONResponseBody3ProjectsPreset](../models/getprojectstoprojectsresponse200applicationjsonresponsebody3projectspreset.md) | :heavy_check_mark:                                                                                                                                                           | N/A                                                                                                                                                                          |