# GetProjectLastRollbackTarget

Legacy mirror of `lastAliasRequest` without `type`, kept for CLI compatibility. Only populated by `GET /v9/projects/{idOrName}` when called with `rollbackInfo=true`; `null` in every other response.

## Example Usage

```typescript
import { GetProjectLastRollbackTarget } from "@vercel/sdk/models/getprojectprojectsbranchmatcher.js";

let value: GetProjectLastRollbackTarget = {};
```

## Fields

| Field       | Type        | Required    | Description |
| ----------- | ----------- | ----------- | ----------- |