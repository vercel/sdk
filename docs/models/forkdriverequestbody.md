# ForkDriveRequestBody

## Example Usage

```typescript
import { ForkDriveRequestBody } from "@vercel/sdk/models/forkdriveop.js";

let value: ForkDriveRequestBody = {
  name: "workspace-fork",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | Name for the forked drive. Must be unique per project and URL-safe (alphanumeric, hyphens, underscores). | workspace-fork                                                                                           |