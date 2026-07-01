# GetProjectProjectsResponse200BranchMatcher

## Example Usage

```typescript
import { GetProjectProjectsResponse200BranchMatcher } from "@vercel/sdk/models/getprojecttargets.js";

let value: GetProjectProjectsResponse200BranchMatcher = {
  type: "startsWith",
  pattern: "<value>",
};
```

## Fields

| Field                                                                                                                                                                          | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                         | [models.GetProjectProjectsResponse200ApplicationJSONResponseBodyAliasDeploymentType](../models/getprojectprojectsresponse200applicationjsonresponsebodyaliasdeploymenttype.md) | :heavy_check_mark:                                                                                                                                                             | The type of matching to perform                                                                                                                                                |
| `pattern`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The pattern to match against branch names                                                                                                                                      |