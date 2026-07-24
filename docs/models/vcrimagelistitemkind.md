# VcrImageListItemKind

Whether the manifest is a multi-platform image index, a single-platform image manifest or an attestation.

## Example Usage

```typescript
import { VcrImageListItemKind } from "@vercel/sdk/models/vcrimagelistitem.js";

let value: VcrImageListItemKind = "attestation";
```

## Values

```typescript
"attestation" | "index" | "manifest"
```