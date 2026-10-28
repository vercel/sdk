# UpdateMicrofrontendsExpiration2

## Example Usage

```typescript
import { UpdateMicrofrontendsExpiration2 } from "@vercel/sdk/models/updatemicrofrontendschecksconclusion.js";

let value: UpdateMicrofrontendsExpiration2 = {
  lockedAt: 5909.81,
  lockedBy: "<value>",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `lockedAt`                                                                | *number*                                                                  | :heavy_check_mark:                                                        | Unix ms timestamp when the project was locked.                            |
| `lockedBy`                                                                | *string*                                                                  | :heavy_check_mark:                                                        | ID of the user, app, or integration that locked the project, or `system`. |