# GetProjectRollbackDescription

Description of why a project was rolled back, and by whom. Note that lastAliasRequest contains the from/to details of the rollback.

## Example Usage

```typescript
import { GetProjectRollbackDescription } from "@vercel/sdk/models/getprojectfrom1.js";

let value: GetProjectRollbackDescription = {
  createdAt: 4672.55,
  description: "uh-huh jungle than split",
  userId: "<id>",
  username: "Lorenz.Kuhlman",
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `createdAt`                                                                               | *number*                                                                                  | :heavy_check_mark:                                                                        | Timestamp of when the rollback was requested.                                             |
| `description`                                                                             | *string*                                                                                  | :heavy_check_mark:                                                                        | User-supplied explanation of why they rolled back the project. Limited to 250 characters. |
| `userId`                                                                                  | *string*                                                                                  | :heavy_check_mark:                                                                        | The user who rolled back the project.                                                     |
| `username`                                                                                | *string*                                                                                  | :heavy_check_mark:                                                                        | The username of the user who rolled back the project.                                     |