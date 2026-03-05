# AddRouteSrcSyntax

The syntax type of the source pattern. Determines how the pattern is compiled to regex.

## Example Usage

```typescript
import { AddRouteSrcSyntax } from "@vercel/sdk/models/addrouteop.js";

let value: AddRouteSrcSyntax = "equals";
```

## Values

```typescript
"equals" | "path-to-regexp" | "regex"
```