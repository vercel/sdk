# VcrImageDetailKind

Whether the manifest is a multi-platform image index, a single-platform image manifest or an attestation.

## Example Usage

```typescript
import { VcrImageDetailKind } from "@vercel/sdk/models/vcrimagedetail.js";

let value: VcrImageDetailKind = "manifest";
```

## Values

```typescript
"attestation" | "index" | "manifest"
```