# UpdateProjectToProjectsResponse1

The target envs on the current project that may be accessed.

## Example Usage

```typescript
import { UpdateProjectToProjectsResponse1 } from "@vercel/sdk/models/updateprojectinternalroutes.js";

let value: UpdateProjectToProjectsResponse1 = {
  slugs: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `slugs`                                                                                                                                | *string*[]                                                                                                                             | :heavy_check_mark:                                                                                                                     | System environment slugs (`production`, `preview`) and/or custom environment slugs defined on the referenced project.                  |
| `preset`                                                                                                                               | [models.UpdateProjectToProjectsResponse200ApplicationJSONPreset](../models/updateprojecttoprojectsresponse200applicationjsonpreset.md) | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |