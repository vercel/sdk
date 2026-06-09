# Drive

This object contains information related to a Vercel Sandbox Drive.

## Example Usage

```typescript
import { Drive } from "@vercel/sdk/models/drive.js";

let value: Drive = {
  name: "workspace",
  projectId: "prj_abc123",
  maxSizeBytes: 107374182400,
  currentSessionId: "sbx_123",
  currentSandboxName: "my-sandbox",
  createdAt: 1750344501629,
  updatedAt: 1750344501629,
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `name`                                                                | *string*                                                              | :heavy_check_mark:                                                    | The unique drive name within the project.                             | workspace                                                             |
| `projectId`                                                           | *string*                                                              | :heavy_check_mark:                                                    | The project that owns the drive.                                      | prj_abc123                                                            |
| `maxSizeBytes`                                                        | *number*                                                              | :heavy_check_mark:                                                    | The maximum drive size in bytes.                                      | 107374182400                                                          |
| `currentSessionId`                                                    | *string*                                                              | :heavy_minus_sign:                                                    | Current session ID the drive is attached to, if any.                  | sbx_123                                                               |
| `currentSandboxName`                                                  | *string*                                                              | :heavy_minus_sign:                                                    | Current sandbox name the drive is attached to, if any.                | my-sandbox                                                            |
| `createdAt`                                                           | *number*                                                              | :heavy_check_mark:                                                    | The time when the drive was created, in milliseconds since the epoch. | 1750344501629                                                         |
| `updatedAt`                                                           | *number*                                                              | :heavy_check_mark:                                                    | The last time the drive was updated, in milliseconds since the epoch. | 1750344501629                                                         |