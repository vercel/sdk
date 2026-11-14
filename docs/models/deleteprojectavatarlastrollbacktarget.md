# DeleteProjectAvatarLastRollbackTarget

Legacy mirror of `lastAliasRequest` without `type`, kept for CLI compatibility. Only populated by `GET /v9/projects/{idOrName}` when called with `rollbackInfo=true`; `null` in every other response.

## Example Usage

```typescript
import { DeleteProjectAvatarLastRollbackTarget } from "@vercel/sdk/models/deleteprojectavatarchecksconclusion.js";

let value: DeleteProjectAvatarLastRollbackTarget = {};
```

## Fields

| Field       | Type        | Required    | Description |
| ----------- | ----------- | ----------- | ----------- |