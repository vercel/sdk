# GetProjectsToProjectsResponse2001

The target envs on the current project that may be accessed.

## Example Usage

```typescript
import { GetProjectsToProjectsResponse2001 } from "@vercel/sdk/models/getprojectsresponsebodyprojectsresponseto.js";

let value: GetProjectsToProjectsResponse2001 = {
  slugs: [],
};
```

## Fields

| Field                                                                                                                                                        | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `preset`                                                                                                                                                     | [models.GetProjectsToProjectsResponse200ApplicationJSONResponseBody3Preset](../models/getprojectstoprojectsresponse200applicationjsonresponsebody3preset.md) | :heavy_minus_sign:                                                                                                                                           | N/A                                                                                                                                                          |
| `slugs`                                                                                                                                                      | *string*[]                                                                                                                                                   | :heavy_check_mark:                                                                                                                                           | System environment slugs (`production`, `preview`) and/or custom environment slugs defined on the referenced project.                                        |