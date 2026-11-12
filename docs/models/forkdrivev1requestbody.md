# ForkDriveV1RequestBody

## Example Usage

```typescript
import { ForkDriveV1RequestBody } from "@vercel/sdk/models/forkdrivev1op.js";

let value: ForkDriveV1RequestBody = {
  name: "workspace-fork",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | Name for the forked drive. Must be unique per project and URL-safe (alphanumeric, hyphens, underscores). | workspace-fork                                                                                           |