# GetProjectRollbackDescription

Description of why a project was rolled back, and by whom. Note that lastAliasRequest contains the from/to details of the rollback.

## Example Usage

```typescript
import { GetProjectRollbackDescription } from "@vercel/sdk/models/getprojectapril2026securityincidentmigrationappliedfrom.js";

let value: GetProjectRollbackDescription = {
  userId: "<id>",
  username: "Jammie_Morissette87",
  description:
    "slip orientate rim since ew whoa conservative camouflage whether intrigue",
  createdAt: 6042.84,
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `userId`                                                                                  | *string*                                                                                  | :heavy_check_mark:                                                                        | The user who rolled back the project.                                                     |
| `username`                                                                                | *string*                                                                                  | :heavy_check_mark:                                                                        | The username of the user who rolled back the project.                                     |
| `description`                                                                             | *string*                                                                                  | :heavy_check_mark:                                                                        | User-supplied explanation of why they rolled back the project. Limited to 250 characters. |
| `createdAt`                                                                               | *number*                                                                                  | :heavy_check_mark:                                                                        | Timestamp of when the rollback was requested.                                             |