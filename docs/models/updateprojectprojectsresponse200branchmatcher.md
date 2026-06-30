# UpdateProjectProjectsResponse200BranchMatcher

## Example Usage

```typescript
import { UpdateProjectProjectsResponse200BranchMatcher } from "@vercel/sdk/models/updateprojectbuilds.js";

let value: UpdateProjectProjectsResponse200BranchMatcher = {
  type: "equals",
  pattern: "<value>",
};
```

## Fields

| Field                                                                                                                                                                                | Type                                                                                                                                                                                 | Required                                                                                                                                                                             | Description                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                               | [models.UpdateProjectProjectsResponse200ApplicationJSONResponseBodyAliasDeploymentType](../models/updateprojectprojectsresponse200applicationjsonresponsebodyaliasdeploymenttype.md) | :heavy_check_mark:                                                                                                                                                                   | The type of matching to perform                                                                                                                                                      |
| `pattern`                                                                                                                                                                            | *string*                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                   | The pattern to match against branch names                                                                                                                                            |