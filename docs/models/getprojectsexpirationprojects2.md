# GetProjectsExpirationProjects2

## Example Usage

```typescript
import { GetProjectsExpirationProjects2 } from "@vercel/sdk/models/getprojectselasticbuildmachineprojects3.js";

let value: GetProjectsExpirationProjects2 = {
  lockedAt: 4820.64,
  lockedBy: "<value>",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `lockedAt`                                                                | *number*                                                                  | :heavy_check_mark:                                                        | Unix ms timestamp when the project was locked.                            |
| `lockedBy`                                                                | *string*                                                                  | :heavy_check_mark:                                                        | ID of the user, app, or integration that locked the project, or `system`. |