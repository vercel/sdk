# GetProjectsToProjectsResponse200ApplicationJSONResponseBody1

The target envs on the current project that may be accessed.

## Example Usage

```typescript
import { GetProjectsToProjectsResponse200ApplicationJSONResponseBody1 } from "@vercel/sdk/models/getprojectsresponsebodyprojectsresponse200applicationjson2projectstype.js";

let value: GetProjectsToProjectsResponse200ApplicationJSONResponseBody1 = {
  slugs: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                                                                                                                                                                    | Type                                                                                                                                                                                                     | Required                                                                                                                                                                                                 | Description                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `preset`                                                                                                                                                                                                 | [models.GetProjectsToProjectsResponse200ApplicationJSONResponseBody3ProjectsTrustedSourcesPreset](../models/getprojectstoprojectsresponse200applicationjsonresponsebody3projectstrustedsourcespreset.md) | :heavy_minus_sign:                                                                                                                                                                                       | N/A                                                                                                                                                                                                      |
| `slugs`                                                                                                                                                                                                  | *string*[]                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                       | System environment slugs (`production`, `preview`) and/or custom environment slugs defined on the referenced project.                                                                                    |