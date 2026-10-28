# GetProjectsExpiration2

## Example Usage

```typescript
import { GetProjectsExpiration2 } from "@vercel/sdk/models/getprojectsresponsebodyprojectsresponse200applicationjsonaliasassigned.js";

let value: GetProjectsExpiration2 = {
  lockedAt: 6394.37,
  lockedBy: "<value>",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `lockedAt`                                                                | *number*                                                                  | :heavy_check_mark:                                                        | Unix ms timestamp when the project was locked.                            |
| `lockedBy`                                                                | *string*                                                                  | :heavy_check_mark:                                                        | ID of the user, app, or integration that locked the project, or `system`. |