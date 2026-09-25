# SandboxSnapshotted

## Example Usage

```typescript
import { SandboxSnapshotted } from "@vercel/sdk/models/listvercelciinvocationsop.js";

let value: SandboxSnapshotted = {
  sandboxSnapshotId: "<id>",
  workingDirectory: "<value>",
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `sandboxSnapshotId` | *string*            | :heavy_check_mark:  | N/A                 |
| `workingDirectory`  | *string*            | :heavy_check_mark:  | N/A                 |
| `snapshottedAt`     | *number*            | :heavy_minus_sign:  | N/A                 |