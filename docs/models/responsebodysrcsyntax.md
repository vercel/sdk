# ResponseBodySrcSyntax

The syntax type of the source pattern. Determines how the pattern is compiled to regex.

## Example Usage

```typescript
import { ResponseBodySrcSyntax } from "@vercel/sdk/models/getroutesop.js";

let value: ResponseBodySrcSyntax = "path-to-regexp";
```

## Values

```typescript
"equals" | "path-to-regexp" | "regex"
```