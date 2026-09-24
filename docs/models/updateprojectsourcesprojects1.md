# UpdateProjectSourcesProjects1

Allowlist entry for GitHub and Bitbucket, whose repos are identified by a flat `org`/`repo` (Bitbucket's workspace/owner maps to `org`, its repo slug to `repo`). Omit `repo` to match any repo in the org. Org is matched case-insensitively.

## Example Usage

```typescript
import { UpdateProjectSourcesProjects1 } from "@vercel/sdk/models/updateprojectprojectsresponsebuildmachineelastictransition.js";

let value: UpdateProjectSourcesProjects1 = {
  org: "<value>",
  provider: "bitbucket",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `org`                                                                                                                  | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `provider`                                                                                                             | [models.UpdateProjectSourcesProjectsResponse200Provider](../models/updateprojectsourcesprojectsresponse200provider.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `repo`                                                                                                                 | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |