# GitSources

`enabled: true` with empty `sources` is deny-all.

## Example Usage

```typescript
import { GitSources } from "@vercel/sdk/models/team.js";

let value: GitSources = {
  sources: [],
  enabled: true,
  environments: [],
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `sources`                   | *models.Sources*[]          | :heavy_check_mark:          | N/A                         |
| `enabled`                   | *boolean*                   | :heavy_check_mark:          | N/A                         |
| `environments`              | *models.TeamEnvironments*[] | :heavy_check_mark:          | N/A                         |