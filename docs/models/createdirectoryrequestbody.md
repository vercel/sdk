# CreateDirectoryRequestBody

## Example Usage

```typescript
import { CreateDirectoryRequestBody } from "@vercel/sdk/models/createdirectoryop.js";

let value: CreateDirectoryRequestBody = {
  cwd: "/home/vercel-sandbox",
  path: "src/components",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            | Example                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `cwd`                                                                                                                  | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | The base directory for resolving relative paths. If not specified, paths are resolved from the sandbox home directory. | /home/vercel-sandbox                                                                                                   |
| `path`                                                                                                                 | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The path of the directory to create. Can be absolute or relative to the working directory.                             | src/components                                                                                                         |
| `recursive`                                                                                                            | *boolean*                                                                                                              | :heavy_minus_sign:                                                                                                     | If true, creates parent directories as needed (like `mkdir -p`). If false, fails if parent directories do not exist.   |                                                                                                                        |