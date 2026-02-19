# ReadFileRequestBody

## Example Usage

```typescript
import { ReadFileRequestBody } from "@vercel/sdk/models/readfileop.js";

let value: ReadFileRequestBody = {
  cwd: "/home/vercel-sandbox",
  path: "dist/agent-output.md",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            | Example                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `cwd`                                                                                                                  | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | The base directory for resolving relative paths. If not specified, paths are resolved from the sandbox home directory. | /home/vercel-sandbox                                                                                                   |
| `path`                                                                                                                 | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The path of the file to read. Can be absolute or relative to the working directory.                                    | dist/agent-output.md                                                                                                   |