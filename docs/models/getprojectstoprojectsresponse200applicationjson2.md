# GetProjectsToProjectsResponse200ApplicationJson2

The target envs on the current project that may be accessed.

## Example Usage

```typescript
import { GetProjectsToProjectsResponse200ApplicationJson2 } from "@vercel/sdk/models/responsebodyblockhistory.js";

let value: GetProjectsToProjectsResponse200ApplicationJson2 = {
  preset: "all-custom",
};
```

## Fields

| Field                                                                                                                                                                        | Type                                                                                                                                                                         | Required                                                                                                                                                                     | Description                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `preset`                                                                                                                                                                     | [models.GetProjectsToProjectsResponse200ApplicationJSONResponseBody2ProjectsPreset](../models/getprojectstoprojectsresponse200applicationjsonresponsebody2projectspreset.md) | :heavy_check_mark:                                                                                                                                                           | N/A                                                                                                                                                                          |
| `slugs`                                                                                                                                                                      | *string*[]                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                           | System environment slugs (`production`, `preview`) and/or custom environment slugs defined on the referenced project.                                                        |