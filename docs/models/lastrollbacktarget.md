# LastRollbackTarget

Legacy mirror of `lastAliasRequest` without `type`, kept for CLI compatibility. Only populated by `GET /v9/projects/{idOrName}` when called with `rollbackInfo=true`; `null` in every other response.

## Example Usage

```typescript
import { LastRollbackTarget } from "@vercel/sdk/models/createprojectprojectsoidctokenclaims.js";

let value: LastRollbackTarget = {};
```

## Fields

| Field       | Type        | Required    | Description |
| ----------- | ----------- | ----------- | ----------- |