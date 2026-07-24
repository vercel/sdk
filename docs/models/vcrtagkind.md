# VcrTagKind

Whether the manifest is a multi-platform image index, a single-platform image manifest or an attestation.

## Example Usage

```typescript
import { VcrTagKind } from "@vercel/sdk/models/vcrtag.js";

let value: VcrTagKind = "index";
```

## Values

```typescript
"attestation" | "index" | "manifest"
```