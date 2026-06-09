# GetOrCreateDriveSandboxesResponseBody

## Example Usage

```typescript
import { GetOrCreateDriveSandboxesResponseBody } from "@vercel/sdk/models/getorcreatedriveop.js";

let value: GetOrCreateDriveSandboxesResponseBody = {
  drive: {
    name: "workspace",
    projectId: "prj_abc123",
    maxSizeBytes: 107374182400,
    currentSessionId: "sbx_123",
    currentSandboxName: "my-sandbox",
    createdAt: 1750344501629,
    updatedAt: 1750344501629,
  },
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `drive`                                                             | [models.Drive](../models/drive.md)                                  | :heavy_check_mark:                                                  | This object contains information related to a Vercel Sandbox Drive. |