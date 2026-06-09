# GetOrCreateDriveRequestBody

## Example Usage

```typescript
import { GetOrCreateDriveRequestBody } from "@vercel/sdk/models/getorcreatedriveop.js";

let value: GetOrCreateDriveRequestBody = {
  projectId: "prj_abc123",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `projectId`                                                                                                        | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The project ID or name to associate the drive with. Required unless using a Vercel OIDC token scoped to a project. | prj_abc123                                                                                                         |
| `maxSizeBytes`                                                                                                     | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | Maximum drive size in bytes. Defaults to 100 GiB when omitted.                                                     |                                                                                                                    |