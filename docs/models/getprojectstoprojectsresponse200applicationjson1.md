# GetProjectsToProjectsResponse200ApplicationJson1

The target envs on the current project that may be accessed.

## Example Usage

```typescript
import { GetProjectsToProjectsResponse200ApplicationJson1 } from "@vercel/sdk/models/getprojectsresponsebodyprojectsowasp.js";

let value: GetProjectsToProjectsResponse200ApplicationJson1 = {
  slugs: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                                                                                                                                                                    | Type                                                                                                                                                                                                     | Required                                                                                                                                                                                                 | Description                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `slugs`                                                                                                                                                                                                  | *string*[]                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                       | System environment slugs (`production`, `preview`) and/or custom environment slugs defined on the referenced project.                                                                                    |
| `preset`                                                                                                                                                                                                 | [models.GetProjectsToProjectsResponse200ApplicationJSONResponseBody3ProjectsTrustedSourcesPreset](../models/getprojectstoprojectsresponse200applicationjsonresponsebody3projectstrustedsourcespreset.md) | :heavy_minus_sign:                                                                                                                                                                                       | N/A                                                                                                                                                                                                      |