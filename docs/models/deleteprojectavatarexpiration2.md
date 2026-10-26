# DeleteProjectAvatarExpiration2

## Example Usage

```typescript
import { DeleteProjectAvatarExpiration2 } from "@vercel/sdk/models/deleteprojectavatarplan.js";

let value: DeleteProjectAvatarExpiration2 = {
  lockedAt: 4678.52,
  lockedBy: "<value>",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `lockedAt`                                                                | *number*                                                                  | :heavy_check_mark:                                                        | Unix ms timestamp when the project was locked.                            |
| `lockedBy`                                                                | *string*                                                                  | :heavy_check_mark:                                                        | ID of the user, app, or integration that locked the project, or `system`. |