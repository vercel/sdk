# FileTreeType

String indicating the type of file tree entry.

## Example Usage

```typescript
import { FileTreeType } from "@vercel/sdk/models/filetree.js";

let value: FileTreeType = "file";
```

## Values

```typescript
"directory" | "file" | "symlink" | "lambda" | "middleware" | "invalid"
```