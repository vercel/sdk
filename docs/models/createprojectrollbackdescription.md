# CreateProjectRollbackDescription

Description of why a project was rolled back, and by whom. Note that lastAliasRequest contains the from/to details of the rollback.

## Example Usage

```typescript
import { CreateProjectRollbackDescription } from "@vercel/sdk/models/createprojectprojectsplan.js";

let value: CreateProjectRollbackDescription = {
  createdAt: 2712.14,
  description:
    "variable willow weary wrongly inconsequential unethically up fess vaguely insolence",
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `createdAt`                                                                               | *number*                                                                                  | :heavy_check_mark:                                                                        | Timestamp of when the rollback was requested.                                             |
| `description`                                                                             | *string*                                                                                  | :heavy_check_mark:                                                                        | User-supplied explanation of why they rolled back the project. Limited to 250 characters. |
| `principal`                                                                               | *models.CreateProjectPrincipal*                                                           | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `userId`                                                                                  | *string*                                                                                  | :heavy_minus_sign:                                                                        | The ID of the user who rolled back the project, when the principal was a user.            |
| `username`                                                                                | *string*                                                                                  | :heavy_minus_sign:                                                                        | The username of the user who rolled back the project, when the principal was a user.      |