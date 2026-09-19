# GitRepo1

## Example Usage

```typescript
import { GitRepo1 } from "@vercel/sdk/models/canceldeploymentbuildmachine.js";

let value: GitRepo1 = {
  defaultBranch: "<value>",
  name: "<value>",
  namespace: "<value>",
  ownerType: "user",
  path: "/var/log",
  private: false,
  projectId: 8485.82,
  type: "gitlab",
  url: "https://regal-lobster.name/",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `defaultBranch`                            | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `name`                                     | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `namespace`                                | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `ownerType`                                | [models.OwnerType](../models/ownertype.md) | :heavy_check_mark:                         | N/A                                        |
| `path`                                     | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `private`                                  | *boolean*                                  | :heavy_check_mark:                         | N/A                                        |
| `projectId`                                | *number*                                   | :heavy_check_mark:                         | N/A                                        |
| `type`                                     | *"gitlab"*                                 | :heavy_check_mark:                         | N/A                                        |
| `url`                                      | *string*                                   | :heavy_check_mark:                         | N/A                                        |