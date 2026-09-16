# GetOrCreateDriveResponseBody

## Example Usage

```typescript
import { GetOrCreateDriveResponseBody } from "@vercel/sdk/models/getorcreatedriveop.js";

let value: GetOrCreateDriveResponseBody = {
  drive: {
    createdAt: 1750344501629,
    currentSandboxName: "my-sandbox",
    currentSessionId: "sbx_123",
    id: "drive_abc123",
    maxSizeBytes: 1099511627776,
    name: "workspace",
    projectId: "prj_abc123",
    region: "iad1",
    updatedAt: 1750344501629,
  },
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `drive`                                                             | [models.Drive](../models/drive.md)                                  | :heavy_check_mark:                                                  | This object contains information related to a Vercel Sandbox Drive. |