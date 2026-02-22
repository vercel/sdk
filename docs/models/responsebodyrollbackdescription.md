# ResponseBodyRollbackDescription

Description of why a project was rolled back, and by whom. Note that lastAliasRequest contains the from/to details of the rollback.

## Example Usage

```typescript
import { ResponseBodyRollbackDescription } from "@vercel/sdk/models/getprojectsblockhistoryprojects3.js";

let value: ResponseBodyRollbackDescription = {
  userId: "<id>",
  username: "Aaron_Ebert",
  description: "somber whose bloom gah zowie stormy",
  createdAt: 6658.44,
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `userId`                                                                                  | *string*                                                                                  | :heavy_check_mark:                                                                        | The user who rolled back the project.                                                     |
| `username`                                                                                | *string*                                                                                  | :heavy_check_mark:                                                                        | The username of the user who rolled back the project.                                     |
| `description`                                                                             | *string*                                                                                  | :heavy_check_mark:                                                                        | User-supplied explanation of why they rolled back the project. Limited to 250 characters. |
| `createdAt`                                                                               | *number*                                                                                  | :heavy_check_mark:                                                                        | Timestamp of when the rollback was requested.                                             |