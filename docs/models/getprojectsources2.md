# GetProjectSources2

Allowlist entry for GitLab, which uses nested groups rather than a flat org/repo. `namespace` is the full group path (e.g. `group` or `group/subgroup`); `project` is the leaf project name. Omit `project` to match any project under the namespace. Namespace is matched case-insensitively.

## Example Usage

```typescript
import { GetProjectSources2 } from "@vercel/sdk/models/getprojectdestination.js";

let value: GetProjectSources2 = {
  provider: "gitlab",
  namespace: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `provider`         | *"gitlab"*         | :heavy_check_mark: | N/A                |
| `namespace`        | *string*           | :heavy_check_mark: | N/A                |
| `project`          | *string*           | :heavy_minus_sign: | N/A                |