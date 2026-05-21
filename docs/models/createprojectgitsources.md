# CreateProjectGitSources

Restricts inbound Git deployments to an allowlist of orgs and/or repos. `enabled: true` with an empty `sources` list is treated as deny-all.

## Example Usage

```typescript
import { CreateProjectGitSources } from "@vercel/sdk/models/createprojectresponsebody.js";

let value: CreateProjectGitSources = {
  sources: [],
  enabled: true,
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `sources`                       | *models.CreateProjectSources*[] | :heavy_check_mark:              | N/A                             |
| `enabled`                       | *boolean*                       | :heavy_check_mark:              | N/A                             |