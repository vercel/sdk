# CreateStorageStoresBlobKind

A project-default store is a private blob store that is lazily created per-project, uses OIDC auth instead of read-write tokens, and cannot be modified through standard store mutation APIs. Undefined for legacy stores.

## Example Usage

```typescript
import { CreateStorageStoresBlobKind } from "@vercel/sdk/models/createstoragestoresblobop.js";

let value: CreateStorageStoresBlobKind = "project-default";
```

## Values

```typescript
"project-default" | "user-created"
```