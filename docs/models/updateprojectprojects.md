# UpdateProjectProjects

## Example Usage

```typescript
import { UpdateProjectProjects } from "@vercel/sdk/models/updateprojectprojectsbranchmatcher.js";

let value: UpdateProjectProjects = {};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `label`                                                       | *string*                                                      | :heavy_minus_sign:                                            | The label or description of the trusted source                |
| `customAllow`                                                 | [models.CustomAllow](../models/customallow.md)[]              | :heavy_minus_sign:                                            | Optional overrides for the default same-env-by-slug matching. |