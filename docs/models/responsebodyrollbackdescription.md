# ResponseBodyRollbackDescription

Description of why a project was rolled back, and by whom. Note that lastAliasRequest contains the from/to details of the rollback.

## Example Usage

```typescript
import { ResponseBodyRollbackDescription } from "@vercel/sdk/models/getprojectsresponsebodyprojectsresponseto.js";

let value: ResponseBodyRollbackDescription = {
  createdAt: 3.35,
  description: "slight thrifty yowza rally corporation worth ruddy",
  userId: "<id>",
  username: "Orion_Bednar31",
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `createdAt`                                                                               | *number*                                                                                  | :heavy_check_mark:                                                                        | Timestamp of when the rollback was requested.                                             |
| `description`                                                                             | *string*                                                                                  | :heavy_check_mark:                                                                        | User-supplied explanation of why they rolled back the project. Limited to 250 characters. |
| `userId`                                                                                  | *string*                                                                                  | :heavy_check_mark:                                                                        | The user who rolled back the project.                                                     |
| `username`                                                                                | *string*                                                                                  | :heavy_check_mark:                                                                        | The username of the user who rolled back the project.                                     |