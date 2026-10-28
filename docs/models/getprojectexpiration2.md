# GetProjectExpiration2

## Example Usage

```typescript
import { GetProjectExpiration2 } from "@vercel/sdk/models/getprojectbuilds.js";

let value: GetProjectExpiration2 = {
  lockedAt: 8837.73,
  lockedBy: "<value>",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `lockedAt`                                                                | *number*                                                                  | :heavy_check_mark:                                                        | Unix ms timestamp when the project was locked.                            |
| `lockedBy`                                                                | *string*                                                                  | :heavy_check_mark:                                                        | ID of the user, app, or integration that locked the project, or `system`. |