# Branch

## Example Usage

```typescript
import { Branch } from "@vercel/sdk/models/connecttriggerdestinationinput.js";

let value: Branch = {
  projectId: "<id>",
  branch: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `projectId`                                                                | *string*                                                                   | :heavy_check_mark:                                                         | Project that receives matching trigger requests.                           |
| `branch`                                                                   | *string*                                                                   | :heavy_check_mark:                                                         | Git branch used to select a preview deployment.                            |
| `path`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | Route path on the linked project that receives forwarded trigger requests. |