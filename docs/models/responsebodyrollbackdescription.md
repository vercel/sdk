# ResponseBodyRollbackDescription

Description of why a project was rolled back, and by whom. Note that lastAliasRequest contains the from/to details of the rollback.

## Example Usage

```typescript
import { ResponseBodyRollbackDescription } from "@vercel/sdk/models/getprojectsresponsebodyprojectsresponseto.js";

let value: ResponseBodyRollbackDescription = {
  createdAt: 3.35,
  description: "slight thrifty yowza rally corporation worth ruddy",
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `createdAt`                                                                               | *number*                                                                                  | :heavy_check_mark:                                                                        | Timestamp of when the rollback was requested.                                             |
| `description`                                                                             | *string*                                                                                  | :heavy_check_mark:                                                                        | User-supplied explanation of why they rolled back the project. Limited to 250 characters. |
| `principal`                                                                               | *models.ResponseBodyPrincipal*                                                            | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `userId`                                                                                  | *string*                                                                                  | :heavy_minus_sign:                                                                        | The ID of the user who rolled back the project, when the principal was a user.            |
| `username`                                                                                | *string*                                                                                  | :heavy_minus_sign:                                                                        | The username of the user who rolled back the project, when the principal was a user.      |