# UpdateProjectPaths

## Example Usage

```typescript
import { UpdateProjectPaths } from "@vercel/sdk/models/updateprojectop.js";

let value: UpdateProjectPaths = {
  value: "<value>",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `value`                                                              | *string*                                                             | :heavy_check_mark:                                                   | The regex path that should not be protected by Deployment Protection |