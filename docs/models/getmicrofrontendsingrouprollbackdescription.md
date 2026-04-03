# GetMicrofrontendsInGroupRollbackDescription

Description of why a project was rolled back, and by whom. Note that lastAliasRequest contains the from/to details of the rollback.

## Example Usage

```typescript
import { GetMicrofrontendsInGroupRollbackDescription } from "@vercel/sdk/models/getmicrofrontendsingroupflatratetier.js";

let value: GetMicrofrontendsInGroupRollbackDescription = {
  userId: "<id>",
  username: "Marisol66",
  description: "hmph paltry technician regarding",
  createdAt: 4609.94,
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `userId`                                                                                  | *string*                                                                                  | :heavy_check_mark:                                                                        | The user who rolled back the project.                                                     |
| `username`                                                                                | *string*                                                                                  | :heavy_check_mark:                                                                        | The username of the user who rolled back the project.                                     |
| `description`                                                                             | *string*                                                                                  | :heavy_check_mark:                                                                        | User-supplied explanation of why they rolled back the project. Limited to 250 characters. |
| `createdAt`                                                                               | *number*                                                                                  | :heavy_check_mark:                                                                        | Timestamp of when the rollback was requested.                                             |