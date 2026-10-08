# Label

Machine types an elastic decision can effectively apply or persist. The algorithm may consider Basic, but Basic is normalized to standard before an elastic decision becomes effective.

## Example Usage

```typescript
import { Label } from "@vercel/sdk/models/internalroutesmitigate.js";

let value: Label = "enhanced";
```

## Values

```typescript
"enhanced" | "standard" | "turbo"
```