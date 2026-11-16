# UploadProjectAvatarLastRollbackTarget

Legacy mirror of `lastAliasRequest` without `type`, kept for CLI compatibility. Only populated by `GET /v9/projects/{idOrName}` when called with `rollbackInfo=true`; `null` in every other response.

## Example Usage

```typescript
import { UploadProjectAvatarLastRollbackTarget } from "@vercel/sdk/models/uploadprojectavatarchecksconclusion.js";

let value: UploadProjectAvatarLastRollbackTarget = {};
```

## Fields

| Field       | Type        | Required    | Description |
| ----------- | ----------- | ----------- | ----------- |