# UpdateMicrofrontendsLastRollbackTarget

Legacy mirror of `lastAliasRequest` without `type`, kept for CLI compatibility. Only populated by `GET /v9/projects/{idOrName}` when called with `rollbackInfo=true`; `null` in every other response.

## Example Usage

```typescript
import { UpdateMicrofrontendsLastRollbackTarget } from "@vercel/sdk/models/updatemicrofrontendsbuilds.js";

let value: UpdateMicrofrontendsLastRollbackTarget = {};
```

## Fields

| Field       | Type        | Required    | Description |
| ----------- | ----------- | ----------- | ----------- |