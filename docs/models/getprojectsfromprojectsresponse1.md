# GetProjectsFromProjectsResponse1

The source envs on the trusted project that are allowed to access `to`.

## Example Usage

```typescript
import { GetProjectsFromProjectsResponse1 } from "@vercel/sdk/models/getprojectslinkprojectsresponse200applicationjsonresponsebody2projects5deployhooks.js";

let value: GetProjectsFromProjectsResponse1 = {
  slugs: [],
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `preset`                                                                                                                               | [models.GetProjectsFromProjectsResponse200ApplicationJSONPreset](../models/getprojectsfromprojectsresponse200applicationjsonpreset.md) | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |
| `slugs`                                                                                                                                | *string*[]                                                                                                                             | :heavy_check_mark:                                                                                                                     | System environment slugs (`production`, `preview`) and/or custom environment slugs defined on the referenced project.                  |