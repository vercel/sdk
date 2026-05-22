# GitSources

Restricts inbound Git deployments to an allowlist of orgs and/or repos. `enabled: true` with an empty `sources` list is treated as deny-all.

## Example Usage

```typescript
import { GitSources } from "@vercel/sdk/models/team.js";

let value: GitSources = {
  sources: [],
  enabled: true,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `sources`          | *models.Sources*[] | :heavy_check_mark: | N/A                |
| `enabled`          | *boolean*          | :heavy_check_mark: | N/A                |