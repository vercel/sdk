# GetProjectsExpirationProjectsResponse2

## Example Usage

```typescript
import { GetProjectsExpirationProjectsResponse2 } from "@vercel/sdk/models/responsebodylastrollbacktarget.js";

let value: GetProjectsExpirationProjectsResponse2 = {
  lockedAt: 45.93,
  lockedBy: "<value>",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `lockedAt`                                                                | *number*                                                                  | :heavy_check_mark:                                                        | Unix ms timestamp when the project was locked.                            |
| `lockedBy`                                                                | *string*                                                                  | :heavy_check_mark:                                                        | ID of the user, app, or integration that locked the project, or `system`. |