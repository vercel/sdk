# ResponseBodyLastRollbackTarget

Legacy mirror of `lastAliasRequest` without `type`, kept for CLI compatibility. Only populated by `GET /v9/projects/{idOrName}` when called with `rollbackInfo=true`; `null` in every other response.

## Example Usage

```typescript
import { ResponseBodyLastRollbackTarget } from "@vercel/sdk/models/responsebodylastrollbacktarget.js";

let value: ResponseBodyLastRollbackTarget = {};
```

## Fields

| Field       | Type        | Required    | Description |
| ----------- | ----------- | ----------- | ----------- |