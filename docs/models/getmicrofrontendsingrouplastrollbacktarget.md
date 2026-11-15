# GetMicrofrontendsInGroupLastRollbackTarget

Legacy mirror of `lastAliasRequest` without `type`, kept for CLI compatibility. Only populated by `GET /v9/projects/{idOrName}` when called with `rollbackInfo=true`; `null` in every other response.

## Example Usage

```typescript
import { GetMicrofrontendsInGroupLastRollbackTarget } from "@vercel/sdk/models/getmicrofrontendsingroupchecksconclusion.js";

let value: GetMicrofrontendsInGroupLastRollbackTarget = {};
```

## Fields

| Field       | Type        | Required    | Description |
| ----------- | ----------- | ----------- | ----------- |