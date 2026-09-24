# CreateProjectProjectsResponse200BranchMatcher

## Example Usage

```typescript
import { CreateProjectProjectsResponse200BranchMatcher } from "@vercel/sdk/models/createprojectcontenthint8.js";

let value: CreateProjectProjectsResponse200BranchMatcher = {
  pattern: "<value>",
  type: "endsWith",
};
```

## Fields

| Field                                                                                                                                                                                | Type                                                                                                                                                                                 | Required                                                                                                                                                                             | Description                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `pattern`                                                                                                                                                                            | *string*                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                   | The pattern to match against branch names                                                                                                                                            |
| `type`                                                                                                                                                                               | [models.CreateProjectProjectsResponse200ApplicationJSONResponseBodyAliasDeploymentType](../models/createprojectprojectsresponse200applicationjsonresponsebodyaliasdeploymenttype.md) | :heavy_check_mark:                                                                                                                                                                   | The type of matching to perform                                                                                                                                                      |