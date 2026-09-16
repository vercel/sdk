# Drive

This object contains information related to a Vercel Sandbox Drive.

## Example Usage

```typescript
import { Drive } from "@vercel/sdk/models/drive.js";

let value: Drive = {
  createdAt: 1750344501629,
  currentSandboxName: "my-sandbox",
  currentSessionId: "sbx_123",
  id: "drive_abc123",
  maxSizeBytes: 1099511627776,
  name: "workspace",
  projectId: "prj_abc123",
  region: "iad1",
  updatedAt: 1750344501629,
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `createdAt`                                                           | *number*                                                              | :heavy_check_mark:                                                    | The time when the drive was created, in milliseconds since the epoch. | 1750344501629                                                         |
| `currentSandboxName`                                                  | *string*                                                              | :heavy_minus_sign:                                                    | Current sandbox name the drive is attached to, if any.                | my-sandbox                                                            |
| `currentSessionId`                                                    | *string*                                                              | :heavy_minus_sign:                                                    | Current session ID the drive is attached to, if any.                  | sbx_123                                                               |
| `id`                                                                  | *string*                                                              | :heavy_check_mark:                                                    | The unique drive ID.                                                  | drive_abc123                                                          |
| `maxSizeBytes`                                                        | *number*                                                              | :heavy_check_mark:                                                    | The maximum drive size in bytes.                                      | 1099511627776                                                         |
| `name`                                                                | *string*                                                              | :heavy_check_mark:                                                    | The unique drive name within the project.                             | workspace                                                             |
| `projectId`                                                           | *string*                                                              | :heavy_check_mark:                                                    | The project that owns the drive.                                      | prj_abc123                                                            |
| `region`                                                              | *string*                                                              | :heavy_check_mark:                                                    | The region where the drive is stored.                                 | iad1                                                                  |
| `updatedAt`                                                           | *number*                                                              | :heavy_check_mark:                                                    | The last time the drive was updated, in milliseconds since the epoch. | 1750344501629                                                         |