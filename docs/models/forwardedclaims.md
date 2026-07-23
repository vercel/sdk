# ForwardedClaims

Allow-list of extra claims to propagate, keyed by source (idToken). Only claims named here and present in that source are exposed.

## Example Usage

```typescript
import { ForwardedClaims } from "@vercel/sdk/models/createconnectorop.js";

let value: ForwardedClaims = {};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `idToken`          | *string*[]         | :heavy_minus_sign: | N/A                |