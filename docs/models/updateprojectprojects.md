# UpdateProjectProjects

## Example Usage

```typescript
import { UpdateProjectProjects } from "@vercel/sdk/models/updateprojectprojectsresponse200applicationjsonresponsebodyaction.js";

let value: UpdateProjectProjects = {
  projectId: "<id>",
  environments: [
    "<value 1>",
  ],
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `label`                                       | *string*                                      | :heavy_minus_sign:                            | The label or description of the OIDC Provider |
| `projectId`                                   | *string*                                      | :heavy_check_mark:                            | The ID of the project                         |
| `environments`                                | *string*[]                                    | :heavy_check_mark:                            | N/A                                           |