# UpdateProjectPublicDeployments

Controls whether deployments may have their source and logs available publicly (i.e. the deployment's `public` boolean set to `true`). This rule does NOT control whether the deployment URL itself requires authentication — see deployment protection settings for that. - `allowPublicDeployments: false`: deployments must be created with `public: false`. Public deployments are blocked. - `allowPublicDeployments: true`: equivalent to `enabled: false`; here only so the field is always present on an enabled rule.

## Example Usage

```typescript
import { UpdateProjectPublicDeployments } from "@vercel/sdk/models/updateprojectresponsebody.js";

let value: UpdateProjectPublicDeployments = {
  allowPublicDeployments: true,
  enabled: false,
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `allowPublicDeployments` | *boolean*                | :heavy_check_mark:       | N/A                      |
| `enabled`                | *boolean*                | :heavy_check_mark:       | N/A                      |