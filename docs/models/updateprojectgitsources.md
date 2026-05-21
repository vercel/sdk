# UpdateProjectGitSources

Restricts inbound Git deployments to an allowlist of orgs and/or repos. `enabled: true` with an empty `sources` list is treated as deny-all.

## Example Usage

```typescript
import { UpdateProjectGitSources } from "@vercel/sdk/models/updateprojectresponsebody.js";

let value: UpdateProjectGitSources = {
  sources: [],
  enabled: false,
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `sources`                       | *models.UpdateProjectSources*[] | :heavy_check_mark:              | N/A                             |
| `enabled`                       | *boolean*                       | :heavy_check_mark:              | N/A                             |