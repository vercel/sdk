# GetProjectsFromProjectsResponse1

The source envs on the trusted project that are allowed to access `to`.

## Example Usage

```typescript
import { GetProjectsFromProjectsResponse1 } from "@vercel/sdk/models/getprojectsresponsebodyprojectsowasp.js";

let value: GetProjectsFromProjectsResponse1 = {
  slugs: [],
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `slugs`                                                                                                                                | *string*[]                                                                                                                             | :heavy_check_mark:                                                                                                                     | System environment slugs (`production`, `preview`) and/or custom environment slugs defined on the referenced project.                  |
| `preset`                                                                                                                               | [models.GetProjectsFromProjectsResponse200ApplicationJSONPreset](../models/getprojectsfromprojectsresponse200applicationjsonpreset.md) | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |