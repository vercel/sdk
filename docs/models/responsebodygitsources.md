# ResponseBodyGitSources

Restricts inbound Git deployments to an allowlist of orgs and/or repos. `enabled: true` with an empty `sources` list is treated as deny-all.

## Example Usage

```typescript
import { ResponseBodyGitSources } from "@vercel/sdk/models/getprojectsresponsebodyprojectsresponse200applicationjsoncreator.js";

let value: ResponseBodyGitSources = {
  sources: [],
  enabled: true,
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `sources`                      | *models.ResponseBodySources*[] | :heavy_check_mark:             | N/A                            |
| `enabled`                      | *boolean*                      | :heavy_check_mark:             | N/A                            |