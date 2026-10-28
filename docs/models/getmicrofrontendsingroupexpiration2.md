# GetMicrofrontendsInGroupExpiration2

## Example Usage

```typescript
import { GetMicrofrontendsInGroupExpiration2 } from "@vercel/sdk/models/getmicrofrontendsingroupchecksstate.js";

let value: GetMicrofrontendsInGroupExpiration2 = {
  lockedAt: 1688.3,
  lockedBy: "<value>",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `lockedAt`                                                                | *number*                                                                  | :heavy_check_mark:                                                        | Unix ms timestamp when the project was locked.                            |
| `lockedBy`                                                                | *string*                                                                  | :heavy_check_mark:                                                        | ID of the user, app, or integration that locked the project, or `system`. |